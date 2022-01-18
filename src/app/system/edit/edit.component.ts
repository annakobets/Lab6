
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'src/app/shared/models/message';
import { User } from 'src/app/shared/models/user.model';
import { EditService } from 'src/app/shared/services/edit.service';


@Component({
  selector:'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    // @ts-ignore
  currentUser: User;
    // @ts-ignore
  user: User;
    // @ts-ignore
  message: Message;

  @Output() onRecordEdit = new EventEmitter<User>();

  constructor(private editService: EditService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user') || '{}');
    this.currentUser  = this.user;
    this.message = new Message('success', '');
  }

  

  onSubmit(form:NgForm) 
  {
    const {email, password} = form.value;
    const newUser = new User(email, password, this.user.name, this.user.id);

    this.editService.updateUser(newUser).subscribe((data: User) => {
          this.onRecordEdit.emit(data);
          this.message.text = "Аккаунт успешно обновлен!";
          window.setTimeout(() => this.message.text = '', 5000)
        });
  }

}
