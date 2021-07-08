import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  url: any = 'assets/Product.json'

  constructor(private http:HttpClient) {

  }

  getproductsInfo(){
    return this.http.get(this.url)
}
}
