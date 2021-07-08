import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employee.service';
import { JsonService } from '../services/json.service';

@Component({
  selector: 'app-struct-directives',
  templateUrl: './struct-directives.component.html',
  styleUrls: ['./struct-directives.component.css']
})
export class StructDirectivesComponent  {
  // employees:any = []
  // constructor(empService:EmployeesService){
  //   this.employees = empService.getEmployeesInfo()
  // }
  products:any = []

    errMsg:any=' ';

    constructor(private prdService:JsonService){

      prdService.getproductsInfo().subscribe(



        result => this.products = result,

        error => console.log(error)

      )

    }
}
