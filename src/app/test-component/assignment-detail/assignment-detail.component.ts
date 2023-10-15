import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../test-component.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { VirtualTimeScheduler } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
 /* @Input()*/ assignmentTransit: Assignment;
  constructor(private assignmentService:AssignmentsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAssignment();

  }
  getAssignment(){
    const id=+this.route.snapshot.params['id'];
    this.assignmentService.getAssignment(id).subscribe(assignment=>this.assignmentTransit=assignment);
  }

  onAssignmentRendu(){
    this.assignmentTransit.rendu=true;
    this.assignmentService.updateAssignment(this.assignmentTransit).subscribe(message=>console.log(message));
  }
  onDelete(){
    this.assignmentService.deleteAssignment(this.assignmentTransit).subscribe((message)=>console.log(message));
    this.assignmentTransit=null;
  }

}
