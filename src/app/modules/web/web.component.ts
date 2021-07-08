import { Component, OnInit } from '@angular/core';
import { EmployeewebService } from 'src/app/services/employeeweb.service';


@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent  {

  filteredString:string='';
  sort:any='1';

  employees:any=[]
  constructor(private webService:EmployeewebService){   //service
    this.employees= this.webService.getEmployeesInfo()

    }
}
