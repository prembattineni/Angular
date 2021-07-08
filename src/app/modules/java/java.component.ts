import { Component, OnInit,NgModule } from '@angular/core';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent {

  filteredString:string='';
  sort:any='1';

  products:any=[]
  constructor(private productService:ProductsServiceService){   //service
    this.products= this.productService.getproductsInfo()

    }
}
