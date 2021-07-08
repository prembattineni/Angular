import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeewebService {

  constructor() {
  }

  getEmployeesInfo(){
  return [
    {"empId":101,"empName":"prem","empSalary":20000},
    {"empId":102,"empName":"kumar","empSalary":19000},
    {"empId":103,"empName":"kedari","empSalary":18000},
    {"empId":104,"empName":"vamsi","empSalary":22000}

  ]
}
}
