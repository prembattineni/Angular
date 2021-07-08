import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-forms1',
  templateUrl: './react-forms1.component.html',
  styleUrls: ['./react-forms1.component.css']
})
export class ReactForms1Component {



  productForm = new FormGroup({
    productName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-z]{5,15}$')]),
    address:new FormGroup({
      city:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-z]{3,10}$')]),
      postal:new FormControl('',[Validators.required, Validators.pattern('^[0-9]{6,6}$')])
    })
  })

  submitData() {
    console.log(this.productForm)
    console.log(this.productForm.value)
  }

}
