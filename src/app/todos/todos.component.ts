import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Itodo } from "../models/todos_Interface";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"],
})
export class TodosComponent implements OnInit {
  isInEditMode: boolean = false;

  @ViewChild("todoItem") todoItemRef!: ElementRef;

  constructor() {}

  ngOnInit(): void {}
  //   1st STEP Create And Read

  onTodoAdd(todoItem: HTMLInputElement) {
    // make object here
    let todoObj: Itodo = {
      todoItem: todoItem.value,
      todoId: this.uuid(), //  use uuid function
    };

    this.todosArr.push(todoObj);
    todoItem.value = ""; // clear input


  }


  formMode: "ADD" | "EDIT" = "ADD";

  OnTodoEdit(todoObj: Itodo) {
    // edit mode should be on

    this.isInEditMode = true;
    this.todoItemRef.nativeElement.value = todoObj.todoItem;

    console.log(todoObj); 
    localStorage.setItem("EDIT_ID", todoObj.todoId);
  }

  OnTodoUpdate(todoItem: HTMLInputElement) {
    // Updated-Id
    let UPDATED_ID = localStorage.getItem("EDIT_ID");
    // updated_obj
    if (UPDATED_ID) {
      let UPDATED_OBJ: Itodo = {
        todoItem: todoItem.value,
        todoId: UPDATED_ID,
      };
      console.log(UPDATED_ID);

      // update in array
      let GET_INDEX = this.todosArr.findIndex(
        (todo) => todo.todoId === UPDATED_ID
      );
      this.todosArr[GET_INDEX] = UPDATED_OBJ;
    }
    this.isInEditMode = false;
  }
  OnTodoRemove(todoId: string) {
    // GET REMOED_ID
    let REMOVE_ID = todoId;
    console.log(REMOVE_ID);

    //GET INDEX NO OF THE OBJEECT
    let GET_INDEX = this.todosArr.findIndex(
      (todo) => todo.todoId === REMOVE_ID
    );
    console.log(GET_INDEX);
    this.todosArr.splice(GET_INDEX, 1);
    //REMOVE OBJ FROM ARRAY
  }
  //  UUID function
  uuid(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;
        return value.toString(16);
      }
    );
  }

  todosArr: Array<Itodo> = [
    {
      todoItem: "HTML",
      todoId: "1234",
    },
  ];
}
