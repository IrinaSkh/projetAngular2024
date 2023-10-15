import { Component, OnInit } from '@angular/core';
import { Assignment } from '../test-component.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { VirtualTimeScheduler } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
  assignment!: Assignment | undefined;
  nomAssignment!: string;
  dateDeRendu!:Date;
  constructor(private assignmentService:AssignmentsService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAssignment();
  }
  getAssignment(){
    const id=+this.route.snapshot.params['id'];
    this.assignmentService.getAssignment(id).subscribe(assignment=>{
      if(!assignment) return;
      this.assignment=assignment;
      this.nomAssignment=assignment.nom;
      this.dateDeRendu=assignment.dateDeRendu;
    });
  }

  onSaveAssignment(){
    if(!this.assignment) return;

    this.assignment.nom=this.nomAssignment;
    this.assignment.dateDeRendu=this.dateDeRendu;
    this.assignmentService.updateAssignment(this.assignment).subscribe((message)=>{console.log(message);})
    this.router.navigate(['/home']);
  }
}
