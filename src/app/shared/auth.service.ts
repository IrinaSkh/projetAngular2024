import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  login: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    { login: 'user1', password: 'pass1', role: 'user' },
    { login: 'admin1', password: 'adminpass1', role: 'admin' }
  ];

  private loggedIn = false;

  // Utilisez BehaviorSubject pour la propriété isAdmin
  private isAdminSubject = new BehaviorSubject<boolean>(false);

  // Obtenez un observable pour la propriété isAdmin
  isAdmin$ = this.isAdminSubject.asObservable();

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.login === username && u.password === password);

    if (user) {
      this.loggedIn = true;
      this.isAdminSubject.next(this.isAdmin()); // Mettez à jour la valeur isAdmin
      return true;
    }

    return false;
  }

  logout(): void {
    this.loggedIn = false;
    this.isAdminSubject.next(false); // Mettez à jour la valeur isAdmin
  }

  isLogged(): boolean {
    return this.loggedIn;
  }

  isAdmin(): boolean {
    const user = this.users.find(u => u.role === 'admin');
    return user ? true : false;
  }
}
