import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';
import { Router } from '@angular/router';
import { AssignmentsPaginatorComponent } from './assignments.paginator/assignments.paginator.component';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  titre = 'Mon application sur les assignments';

  assignments!: Assignment[];

  assignmentSelectionne!: Assignment;

  page:number=1;
  limit:number=10;
  totalDocs:number;
  totalPages:number;
  hasPrevPage:boolean;
  prevPage:number;
  hasNextPage:boolean;
  nextPage:number;
  constructor(private assignmentsService: AssignmentsService, private router: Router) {}

  ngOnInit(): void {
    /*this.assignmentsService.getAssignmentPagine(this.page, this.limit).subscribe(data=>{
      this.assignments=data.docs;
      this.page=data.page;
      this.limit=data.limit;
      this.totalDocs=data.totalDocs;
      this.hasPrevPage=data.hasPrevPage;
      this.prevPage=data.prevPage;
      this.hasNextPage=data.hasNextPage;
      this.nextPage=data.nextPage;
    })*/
     this.assignmentsService
       .getAssignments()
       .subscribe((tableauDesAssignmentsObservable) => {
         this.assignments = tableauDesAssignmentsObservable;
      });
      //this.peuplerDB(); 
  }

  onAssignmentClicke(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }
  peuplerDB(){
    this.assignmentsService.peuplerBDAvecForkJoin().subscribe(()=>{
      console.log("La bd a été peuplée");
      this.router.navigate(["/home"], {replaceUrl: true});
    }
    )
  }
}
