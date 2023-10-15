import { Injectable } from '@angular/core';
import { Assignment } from '../test-component/test-component.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[]=[
    {
      id:1,
      nom:"TP1 maths",
      dateDeRendu: new Date('2022-10-10'),
      rendu:true,

    },
    {
      id:2,
      nom:"TP2 physique",
      dateDeRendu: new Date('2023-10-12'),
      rendu:false,

    },
    {
      id:3,
      nom:"TP3 angular",
      dateDeRendu: new Date('2023-10-17'),
      rendu:false,

    }
  ];
  constructor(private loggingService:LoggingService) { }

  // getAssignments(): Assignment[]{
  //   return this.assignments;
  // }
  getAssignments(): Observable<Assignment[]>{
    return of(this.assignments);
  }
  addAssignment(assignment: Assignment): Observable<string>{
    assignment.id=this.assignments[this.getAssignments.length].id+1;
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "ajouté");
    return of("Assignment ajouté");
  }
  updateAssignment(assignment:Assignment):Observable<string>{
    //todo
    this.assignments.find(a=>a.id==assignment.id).rendu=true;

    return of("Assignment service: assignment modifié");
  }
  deleteAssignment(assignment:Assignment):Observable<string>{
    let pos=this.assignments.indexOf(assignment);
    this.assignments.slice(pos,1);
    return of("Assignment service : assignemnt supprimé");
  }
  getAssignment(id:number):Observable<Assignment| undefined>{
    const a:Assignment|undefined=this.assignments.find(a=>a.id===id);
    return of(a);
  }

}
