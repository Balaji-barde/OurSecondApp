import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todos_Interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
@Input()todoArr!:Array<Itodo>

  constructor() { }

  ngOnInit(): void {
  }

}
