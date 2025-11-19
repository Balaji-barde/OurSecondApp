import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/models/todos_Interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {

  constructor() {}

  @Output() transfer : EventEmitter<Itodo> = new EventEmitter()

   uuid = () => {
  return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
    /[xy]/g,
    character => {
      const random = (Math.random() * 16) | 0
      const value = character === 'x' ? random : (random & 0x3) | 0x8
      return value.toString(16)
    }
  )
}

  ngOnInit(): void {
    // this.NewToDo.emit(todo.todoItem)
  }
  onClick(form : NgForm){
    let val = {
      ...form.value,
      todoId : this.uuid()
    }
    this.transfer.emit(val)
    form.reset();
  }

 

}
