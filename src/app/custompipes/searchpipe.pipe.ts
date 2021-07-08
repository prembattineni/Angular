import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (filteredString =='') {
      return value;
    }

    const productsArray = [];
    for (const product of value) {
      if (!product.productName.toLowerCase().search(filteredString)) {
        productsArray.push(product);
      }
    }
    return productsArray;
  }

}
