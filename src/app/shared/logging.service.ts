import { Injectable } from '@angular/core';
import { Assignment } from '../test-component/test-component.model';
@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(assignmentName, action){
    console.log("Assignment"+assignmentName+" "+action);
  }

}
