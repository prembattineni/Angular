import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mytitlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(text: string){

    //implement transform method from PipeTransform interface

    var value=text.toLowerCase();
    var result:any='';
    for(var i=0;i<value.length;i++)
    {
      if(i==0)
      {
        result+=value.charAt(i).toUpperCase();
      }
      else if(value.charAt(i)==' '){
        result+=value.charAt(i).toLowerCase();
        result+=value.charAt(i+1).toUpperCase();
        i++;
      }
      else{

        result+=value.charAt(i).toLowerCase();
      }
    }
    return result;
    }

  }
