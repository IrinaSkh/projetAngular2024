import { Component, OnInit, ViewChild } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';
import { Router } from '@angular/router';
import { AssignmentsPaginatorComponent } from './assignments.paginator/assignments.paginator.component';
import { PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
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
  @ViewChild('tableAssignments') matTableAssignments: MatTable<Assignment>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private assignmentsService: AssignmentsService, private router: Router) {}


  onAssignmentClicke(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }

  displayedColumns: string[] = ['nom', 'id'];

  ngOnInit(): void {
    this.peuplerDB(); 
    this.assignmentsService.getAssignmentPagine(this.page, this.limit).subscribe(data=>{
      console.log(data.docs);
      this.assignments=data.docs;
      this.page=data.page;
      this.limit=data.limit;
      this.totalDocs=data.totalDocs;
      this.hasPrevPage=data.hasPrevPage;
      this.prevPage=data.prevPage;
      this.hasNextPage=data.hasNextPage;
      this.nextPage=data.nextPage;
    })

    //this.matTableAssignments.dataSource=new MatTableDataSource(this.assignments);
    
    // this.assignmentsService
    //   .getAssignments()
    //   .subscribe((tableauDesAssignmentsObservable) => {
    //     this.assignments = tableauDesAssignmentsObservable;
    //   });
      //this.peuplerDB(); 
  }
  getAssignmentsPaginated(page: number, limit: number){
      this.assignmentsService.getAssignmentPagine(page,limit).subscribe(data=>{
      console.log(data.docs);
      this.assignments=data.docs;
      this.page=data.page;
      this.limit=data.limit;
      this.totalDocs=data.totalDocs;
      this.hasPrevPage=data.hasPrevPage;
      this.prevPage=data.prevPage;
      this.hasNextPage=data.hasNextPage;
      this.nextPage=data.nextPage;
    })
    
  }

  peuplerDB(){
    this.assignmentsService.peuplerBDAvecForkJoin().subscribe(()=>{
      console.log("La bd a été peuplée");
      this.router.navigate(["/home"], {replaceUrl: true});
    }
    )
  }
  onPageChanged($event:PageEvent){

    this.getAssignmentsPaginated($event.pageIndex, $event.pageSize);
    this.matTableAssignments.dataSource=this.assignments;
  }
  // ngAfterViewInit() {
  //   this.matTableAssignments.dataSource= this.sort;
  // }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      //this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      //this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
