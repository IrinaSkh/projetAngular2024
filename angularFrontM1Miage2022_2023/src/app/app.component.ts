import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application de gestion des assignments !!!';
  identifiant: string;
  motdepasse: string;

  constructor(public authService:AuthService, private router:Router) {}

  login() {
      this.authService.logIn(this.identifiant, this.motdepasse);
      this.authService.loggedIn = true;
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['/home']);
    this.authService.loggedIn = false;
}
}
