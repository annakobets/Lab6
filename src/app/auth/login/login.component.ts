import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Message } from 'src/app/shared/models/message';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 form!: FormGroup;
   // @ts-ignore
 message: Message;

  constructor(
    private usersService: UsersService, 
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() 
  {
    this.message = new Message('danger', '')

    this.route.queryParams
    .subscribe((params: Params)=> {
      if (params['canLogin'])
      {
        this.showMessage( {
          text: "Теперь вы можете войти в систему",
          type: "Успешно"
        })
      }
    })


    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

  private showMessage (message: Message)
  {
    this.message = message;
    window.setTimeout(() =>{
      this.message.text = '';
      }, 5000);
  }

  onSubmit() 
  {
    const formData = this.form.value;
    this.usersService.getUsers(formData.email)

    .subscribe((user: User | undefined) => {

      if (user) {

        if (user.password === formData.password) {
          window.localStorage.setItem('user', JSON.stringify(user));
          this.authService.login();
          this.router.navigate(['/system','main']);

        } else {

          this.showMessage({

            text: 'Пароль не верный',

            type: 'danger'

          });

        }

      } else {

        this.showMessage({

          text: 'Такого пользователя не существует',

          type: 'danger'

        });

      }

    });
  }
}
