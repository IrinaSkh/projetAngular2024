import {Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { MatDrawer } from '@angular/material/sidenav';
import {AssignmentsService} from "./shared/assignments.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('drawer') drawer: MatDrawer;
  title = 'Application de gestion des Assignments';
  identifiant: string;
  motdepasse: string;

  constructor(public authService:AuthService, private router:Router,private assignmentsService: AssignmentsService) {}

  login() {
      this.authService.logIn(this.identifiant, this.motdepasse);
      this.authService.loggedIn = true;
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['/home']);
    this.authService.loggedIn = false;
}
  toggleDrawer() {
    console.log("boutton")
    this.drawer.toggle();
  }

  openLoginForm() {
    // Code pour ouvrir le formulaire de connexion
  }
  peuplerDB(){
    this.assignmentsService.peuplerBDAvecForkJoin().subscribe(()=>{
        console.log("La bd a été peuplée");
        // this.router.navigate(["/home"], {replaceUrl: true});
      }
    )
  }

}
