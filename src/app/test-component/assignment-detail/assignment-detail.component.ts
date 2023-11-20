import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../test-component.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { VirtualTimeScheduler } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
 /* @Input()*/ assignmentTransit: Assignment;
  isAdmin$ = this.authService.isAdmin$;
  constructor(private assignmentService:AssignmentsService, private route:ActivatedRoute, private router:Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.getAssignment();
    this.authService.isAdmin$.subscribe(isAdmin => {
      // Faites quelque chose avec la valeur mise à jour, par exemple mettre à jour une variable locale
      console.log(isAdmin)
    });

  }
  getAssignment(){
    const id=+this.route.snapshot.params['id'];
    this.assignmentService.getAssignment(id).subscribe(assignment=>this.assignmentTransit=assignment);
  }

  onAssignmentRendu(){
    this.assignmentTransit.rendu=true;
    this.assignmentService.updateAssignment(this.assignmentTransit).subscribe(message=>console.log(message));
    this.router.navigate(["/home"]);

  }
  onDelete(){
    this.assignmentService.deleteAssignment(this.assignmentTransit).subscribe((message)=>console.log(message));
    this.assignmentTransit=null;
  }
  onClickEdit() {
    const id = +this.route.snapshot.params['id'];
    const assignment = this.assignmentService.getAssignment(id);

    // Assuming assignmentTransit is an object with a 'nom' property
    const queryParams = { nom: this.assignmentTransit.nom };

    this.router.navigate(["/assignment", id, 'edit'], { queryParams: queryParams, fragment: 'edition' });
  }


}
