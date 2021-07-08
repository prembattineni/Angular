import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form1',
  templateUrl: './template-driven-form1.component.html',
  styleUrls: ['./template-driven-form1.component.css']
})
export class TemplateDrivenForm1Component  {

  submitData(value:any) {
    console.log(value)
  }

}
