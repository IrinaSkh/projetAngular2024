import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './test-component.model';
import {MatDialog} from "@angular/material/dialog";
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})

export class TestComponentComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;
  titre = "Mon application sur les Assignments !"
  ajoutActive=false;
  nomDevoir:string="";
  dateRendu:Date;
  assignmentSelectionne:Assignment;
  formVisible=false;
  assignments:Assignment[];
  constructor(private assignmentService: AssignmentsService, public dialog: MatDialog ) {}
  //nomDevoir:string="";
  ngOnInit(): void {
    //this.assignments=this.assignmentService.getAssignments();
    this.getAssignments();

    setTimeout(()=>{
      this.ajoutActive=true;},2000);
  }
  // onSubmit(event:any) {
  //   const newAssignment= new Assignment();
  //   newAssignment.nom=this.nomDevoir;
  //   newAssignment.dateDeRendu=this.dateRendu;
  //   newAssignment.rendu=false;
  //   this.assignments.push(newAssignment);
  //   console.log(event);
  //   //event.preventDefault();
  // }
  onAddAssignmentBtnClick(){
    this.formVisible=true;
  }
  assignmentClick(assignment: Assignment){
    this.assignmentSelectionne=assignment;
  }
  // onNouvelAssignment(event:Assignment){
  //   //this.assignments.push(event);
  //   this.assignmentService.addAssignment(event).subscribe(message=>console.log(message));
  //   this.formVisible=false;
  // }

  getAssignments(){
    this.assignmentService.getAssignments().subscribe(assignments=>this.assignments=assignments);
  }
  toggleDrawer() {
    console.log("boutton")
    this.drawer.toggle();
  }
  openLoginForm(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px', // ajustez la largeur selon vos besoins
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('La fenêtre de connexion a été fermée.');
      // Traitez le résultat si nécessaire
    });
  }


}
