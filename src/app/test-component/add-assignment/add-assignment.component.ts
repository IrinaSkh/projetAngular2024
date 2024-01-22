import { Component, OnInit /*, EventEmitter, Output*/} from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../test-component.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  // @Output() nouvelAssignment= new EventEmitter<Assignment>();
  nomDevoir:string;
  dateRendu:Date;

  constructor(private assignmentsService:AssignmentsService) { }

  ngOnInit(): void {
  }
  onSubmit(event:any) {
    const newAssignment= new Assignment();
    newAssignment.nom=this.nomDevoir;
    newAssignment.dateDeRendu=this.dateRendu;
    newAssignment.rendu=false;
    //this.assignments.push(newAssignment);
    //this.nouvelAssignment.emit(newAssignment);
    this.assignmentsService.addAssignment(newAssignment).subscribe(message=>console.log(message));
    console.log(event);
    //event.preventDefault();
  }

}
