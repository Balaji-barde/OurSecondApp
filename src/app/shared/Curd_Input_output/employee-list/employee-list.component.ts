import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from '../../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  @Input() todos!: Array<IEmployee>;

  constructor() {}

  ngOnInit(): void {}
}
