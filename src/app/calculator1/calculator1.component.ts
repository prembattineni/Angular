import { Component, OnInit } from '@angular/core';
import { Calculator1serviceService } from '../services/calculator1service.service';

@Component({
  selector: 'app-calculator1',
  templateUrl: './calculator1.component.html',
  styleUrls: ['./calculator1.component.css']
})
export class Calculator1Component implements OnInit {

  a:any

  b:any

  result:any

  constructor(private calculator:Calculator1serviceService) { }



  ngOnInit(): void {

  }

  Operation(value:any){

    var num1 = (Number)(this.a)

    var num2 = (Number)(this.b)

   this.result= this.calculator.Evaluate(num1,num2,value)

  }



}
