import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from 'src/app/models/todos_Interface';

@Component({
  selector: 'app-todo-curd1',
  templateUrl: './todo-curd1.component.html',
  styleUrls: ['./todo-curd1.component.scss'],
})
export class TodoCurd1Component implements OnInit {
  isInEditMode: boolean = false;

  @ViewChild('todoItem') todoItemRef!: ElementRef;
    todosArr: Array<Itodo> = [
    {
      todoItem: 'HTML',
      todoId: '1234',
    },
    {
      todoItem: 'CSS',
      todoId: '1235',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  OnTodoAdd(todoItem: HTMLInputElement) {
    let todoObj: Itodo = {
      todoItem: todoItem.value,
      todoId: this.uuid(),
    };

    this.todosArr.push(todoObj);
    todoItem.value = '';
  }

  OnTodoEdit(todoObj: Itodo) {
    this.isInEditMode = true;
    this.todoItemRef.nativeElement.value = todoObj.todoItem;

    console.log(todoObj);
    localStorage.setItem('EDIT_ID', todoObj.todoId);
  }

  OnTodoUpdate(todoItem: HTMLInputElement) {
    let UPDATED_ID = localStorage.getItem('EDIT_ID');
    if (UPDATED_ID) {
      let UPDATED_OBJ: Itodo = {
        todoItem: todoItem.value,
        todoId: UPDATED_ID,
      };
      console.log(UPDATED_ID);

      let GET_INDEX = this.todosArr.findIndex(
        (todo) => todo.todoId === UPDATED_ID
      );
      this.todosArr[GET_INDEX] = UPDATED_OBJ;
    }
    this.isInEditMode = false;
  }
  OnTodoRemove(todoId: string) {
    let REMOVE_ID = todoId;
    console.log(REMOVE_ID);

    let GET_INDEX = this.todosArr.findIndex(
      (todo) => todo.todoId === REMOVE_ID
    );  
    console.log(GET_INDEX);
    this.todosArr.splice(GET_INDEX, 1);
  }
  uuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === 'x' ? random : (random & 0x3) | 0x8;
        return value.toString(16);
      }
    );
  }


}
