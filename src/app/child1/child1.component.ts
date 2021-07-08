import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component  {

  @Input() cuname:string='';
  @Output() notify:EventEmitter<any> = new EventEmitter<any>();
//   sendDataFromChildToParent(){
//     this.notify.emit('Child Data sending from Child Component')
// }
@Input() childAllowance:number=0;

  mutualFunds()
  {
    this.childAllowance++;
    this.notify.emit(this.childAllowance);

  }
  stockMarket()
  {
    this.childAllowance--;
    this.notify.emit(this.childAllowance);
  }
}
