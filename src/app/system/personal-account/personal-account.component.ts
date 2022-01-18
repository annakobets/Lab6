import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EditService } from 'src/app/shared/services/edit.service';

@Component({
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
})
export class PersonalAccountComponent implements OnInit {

  constructor(private editService: EditService, private router:Router) { }

  user!: User;
  
  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user') || '{}');
  }

  onEdit()
  {
    this.router.navigate(['/system','edit']);
  }

  delete(): void
  {
    this.editService.deleteUser(this.user.id).subscribe();
    this.router.navigate(['/login'])

  }

}
