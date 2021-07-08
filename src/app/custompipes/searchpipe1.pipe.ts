import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe1'
})
export class Searchpipe1Pipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (filteredString =='') {
      return value;
    }

    const employeesArray = [];
    for (const employee of value) {
      if (!employee.empName.toLowerCase().search(filteredString)) {
        employeesArray.push(employee);
      }
    }
    return employeesArray;
  }

}

