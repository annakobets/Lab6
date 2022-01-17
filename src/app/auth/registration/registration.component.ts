import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmail()]),
      'name': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'agree': new FormControl(true, [Validators.requiredTrue])
    });
  }

  onSubmit() {
    const { email, password, name } = this.form.value;
    const user = new User(email, password, name);
    this.usersService.createUser(user)
      .subscribe(() => {
        this.router.navigate(['/login'], {
          queryParams: {
            canLogin: true
          }
        });
      });
  }

  forbiddenEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.usersService.getUsers(control.value).pipe(
        map(res => {
          // if res is true, username exists, return true
          return res ? {  forbiddenEmail: true  } : null;
          // NB: Return null if there is no error
        })
      );
    };
  }
 
}