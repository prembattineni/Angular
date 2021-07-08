import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversepipe'
})
export class ReversepipePipe implements PipeTransform {

  // transform(value: string): string {
  //   let result:string='';
  //   for(var i=value.length;i>=0;i--)
  //   {
  //     result+=value.charAt(i);
  //   }
  //    return result;
  //  }
  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
