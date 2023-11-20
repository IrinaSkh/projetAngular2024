import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { TestComponentComponent } from './test-component/test-component.component';
import { RenduDirective } from './shared/rendu.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {MatCardModule} from '@angular/material/card'
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignmentDetailComponent } from './test-component/assignment-detail/assignment-detail.component';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddAssignmentComponent } from './test-component/add-assignment/add-assignment.component';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import the MatToolbarModule
import { MatSidenavModule } from '@angular/material/sidenav'; // Import the MatSidenavModule

import {Routes, RouterModule} from '@angular/router';
import { EditAssignmentComponent } from './test-component/edit-assignment/edit-assignment.component';
import {LoginComponent} from "./test-component/login/login.component";
import {MatDialogModule} from "@angular/material/dialog";



const routes: Routes=[
  {path:'', component:TestComponentComponent},
  {path:'home', component:TestComponentComponent},
  {path:'add', component:AddAssignmentComponent},
  {path:'assignment/:id', component:AssignmentDetailComponent},
  {path:'assignment/:id/edit', component:EditAssignmentComponent},

]
// import {Component} from '@angular/core';

// /**
//  * @title Basic buttons
//  */
// @Component({
//   selector: 'button-overview-example',
//   templateUrl: 'button-overview-example.html',
//   styleUrls: ['button-overview-example.css'],
// })
// export class ButtonOverviewExample {}

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    RenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    LoginComponent


    //MatFormFieldModule,
    //MatInputModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    //BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    //MatFormField,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
