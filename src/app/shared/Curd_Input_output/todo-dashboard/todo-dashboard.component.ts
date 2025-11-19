import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/models/todos_Interface';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss'],
})
export class TodoDashboardComponent implements OnInit {
onClick($event: Itodo) {
throw new Error('Method not implemented.');
}
  constructor() {}
  todoArr: Array<Itodo> = [
    {
      todoItem: 'HTML',
      todoId: '123',
    },
    {
      todoItem: 'SASS',
      todoId: '124',
    },
    {
      todoItem: 'ANGULAR',
      todoId: '125',
    }
  ];
  ngOnInit(): void {}

  uuid = () => {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === 'x' ? random : (random & 0x3) | 0x8;
        return value.toString(16);
      }
    );
  };
 
  onAdd(msg : Itodo){
    this.todoArr.unshift(msg)
  }
}
