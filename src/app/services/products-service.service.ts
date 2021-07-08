import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  constructor() {
  }

  getproductsInfo(){
  return [
    {productId:101,productName:"samsung A21S", productPrice:12000,productDesc:"Samusung Mobile",productImg:'assets/images/samsung.jpg'},
    {productId:102,productName:"iphone 11", productPrice:100000,productDesc:"Iphone Mobile",productImg:'assets/images/iphone.png'},
    {productId:103,productName:"Blackberry 9720", productPrice:400000,productDesc:"Blackberry Mobile",productImg:'assets/images/blackberry.png'},
    {productId:104,productName:"Nokia 2.4", productPrice:13000,productDesc:"Nokia Mobile",productImg:'assets/images/nokia.png'}
  ]
}
}
