import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Itodo } from 'src/app/models/todos_Interface';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss'],
})
export class TodoDashboardComponent implements OnInit {
  constructor(private _matsnackbar: MatSnackBar) {}

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
    },
  ];
  ngOnInit(): void {}
  // here we are going to store the edit obj
  editTodo!: Itodo;

  getNewTodo(todo: Itodo) {
    this.todoArr.unshift(todo);
     this._matsnackbar.open(
      `The todo item with id ${todo.todoId} is added successfully!`,
      'Close',
      { duration: 3000 }
    );
  }

  onEditTodo(todo: Itodo) {
    console.log(todo); // here we got edit obj now we will have to store in side the dashboard
    this.editTodo = todo;
  }

  getRemoveId(removeID: string) {
    console.log(removeID);
    //removeId from todoArray
    let getConfirm = confirm('Are you sure,you want to remove this todo?');
    if (getConfirm) {
      this.todoArr = this.todoArr.filter((t) => t.todoId !== removeID);
    }
    this._matsnackbar.open(
      `The todo with id ${removeID} is removed successfully!!!!!`,
      'close',
      {
        duration: 3000,
      }
    );
  }

  getUpdatedTodo(todo: Itodo) {
    let getIndex = this.todoArr.findIndex((t) => t.todoId === todo.todoId);
    console.log(getIndex);

    this.todoArr[getIndex] = todo;
    this._matsnackbar.open(
      `The todo with id ${todo.todoId} is Updated successfully!!!!!!!!`,
      'close',
      {
        duration: 3000,
      }
    );
  }

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
}
