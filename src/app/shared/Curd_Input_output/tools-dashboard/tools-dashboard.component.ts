import { Component, OnInit } from '@angular/core';
import { Itools } from '../../models/tools';

@Component({
  selector: 'app-tools-dashboard',
  templateUrl: './tools-dashboard.component.html',
  styleUrls: ['./tools-dashboard.component.scss'],
})
export class ToolsDashboardComponent implements OnInit {
  toolsArr: Array<Itools> = [
    { id: '1', ToolName: 'VS Code' },
    { id: '2', ToolName: 'Postman' },
    { id: '3', ToolName: 'Chrome DevTools' },
    { id: '4', ToolName: 'GitHub' },
  ];

  constructor() {}

  ngOnInit(): void {}

  GetNewTools(todo: Itools) {
    this.toolsArr.unshift(todo);
  }
}
