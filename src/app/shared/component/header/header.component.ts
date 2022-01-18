import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links = [
    {
      title: 'Главная',
      link: 'main',
    },
    {
      title: 'Рецепты',
      link: 'recipes',
    },
    {
      title: 'Создать рецепт',
      link: 'add',
    },
    {
      title: 'Профиль',
      link: 'personal-account',
    },
  ];
  user!: User;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user') || '{}');
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  isCurrentLink(link: string)
  {
    return this.router.url.includes(link);
  }
}
