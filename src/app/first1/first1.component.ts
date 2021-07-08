import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../services/data1.service';

@Component({
  selector: 'app-first1',
  templateUrl: './first1.component.html',
  styleUrls: ['./first1.component.css']
})
export class First1Component implements OnInit {

 customerss:any=[]
 customerss1:any=[
  {"empId":101,"empName":"prem","salary":20000},
  {"empId":102,"empName":"kumar","salary":19000},
  {"empId":103,"empName":"kedari","salary":18000}
 ]

  constructor(private dataService:Data1Service) {
    this.dataService.currentMsg.subscribe(successMsg => this.customerss = successMsg)
  }
  ngOnInit(): void {

   }
  modifiedData(){
  // this.customerss.push({"empId":101,"empName":"prem","salary":20000})
   //this.customerss.push({"empId":102,"empName":"kumar","salary":19000})
  //this.customerss.push({"empId":103,"empName":"kedari","salary":18000})

    //for(var c of this.customerss)
    //this.dataService.changeData(c)

    for(var i=0;i<this.customerss1.length;i++){
      this.dataService.changeData(this.customerss1[i])
       }

  }

}
