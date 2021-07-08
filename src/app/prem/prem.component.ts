import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employee.service';

@Component({
  selector: 'app-prem',
  templateUrl: './prem.component.html',
  styleUrls: ['./prem.component.css']
})
export class PremComponent implements OnInit {

  constructor(private service:EmployeesService) { }

  a:any=[];
  ngOnInit(): void {
    this.service.getEmployeesInfo().subscribe(
         result=> {this.a=result
        console.log(result)},
         error=>console.log("error ") 
    )
  }
 name:string='kumar';
 age:number=21;

 customer = {
  accountNo:8786,
  accountType:'savings account',
  accountonHold:false,
  Balance:1000,
  FixedDeposit:20000
}
  
   
}




