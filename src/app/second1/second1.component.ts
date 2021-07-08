import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../services/data1.service';

@Component({
  selector: 'app-second1',
  templateUrl: './second1.component.html',
  styleUrls: ['./second1.component.css']
})
export class Second1Component implements OnInit {

  customerss:any=[]
  customerss1:any=[
    {"empId":104,"empName":"vamsi","salary":20000},
    {"empId":105,"empName":"krishna","salary":19000},
    {"empId":106,"empName":"battineni","salary":18000}
  ]





  constructor(private dataService:Data1Service) {
    dataService.currentMsg.subscribe(successMsg => this.customerss = successMsg)
  }
  ngOnInit(): void {  }
  modifiedData(){


      // this.customerss.push( {"empId":104,"empName":"prem","salary":20000})
     //  this.customerss.push( {"empId":105,"empName":"kumar","salary":19000})
    //   this.customerss.push( {"empId":106,"empName":"kedari","salary":18000})


     for(var i=0;i<this.customerss1.length;i++){
    this.dataService.changeData(this.customerss1[i])
     }
  }

}

