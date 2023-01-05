import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})

export class TestComponentComponent implements OnInit {
  titre = "Mon application sur les Assignments !"
  ajoutActive=false;
  assignments=[
    {
      nom:"jpp",
      dateDeRendu:"de ce",
      rendu:false,
      bol:true
    },
    {
      nom:"c'est",
      dateDeRendu:"la",
      rendu:true,
      bol:false
    }
  ]
  constructor() { }
  nomDevoir:string="";
  ngOnInit(): void {
    setTimeout(()=>{
      this.ajoutActive=true;},2000);
  }
  onSubmit(event:any) {
    console.log(event);
  }
 


}
