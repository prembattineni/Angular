import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Calculator1serviceService {

  constructor() { }

  Evaluate(a:any,b:any,operator:any):any{

    if(operator=='+'){

      return a+b;

    }

    else if(operator=='-'){

      return a-b;


    }

    else if(operator=='*'){

      return a*b;



    }

    else{

      return a/b;



    }





  }
}
