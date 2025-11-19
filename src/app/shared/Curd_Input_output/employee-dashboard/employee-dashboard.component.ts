import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../models/employee';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss'],
})
export class EmployeeDashboardComponent implements OnInit {
  employeeArr: Array<IEmployee> = [
    {
      id: '101',
      empName: 'Sanjay',
      designation: 'Software Developer',
      salary: 45000,
    },
    {
      id: '102',
      empName: 'Ritika',
      designation: 'UI Developer',
      salary: 40000,
    },
    { id: '103', empName: 'Akash', designation: 'Tester', salary: 35000 },
  ];

  constructor() {}

  ngOnInit(): void {}

  getNewEmployee(todo:IEmployee){
    this.employeeArr.push(todo)
  }
  
}
