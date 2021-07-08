import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent  {

 name:string='prem kumar'
  dob:any = new Date()
// dob:any = new Date(1999,10,09);
 customer={
   cutId:101,
   custName:'prem'
 }

}
