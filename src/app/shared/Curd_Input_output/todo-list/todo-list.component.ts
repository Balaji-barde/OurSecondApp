import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/models/todos_Interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
@Input()todos!:Array<Itodo>
@Output()emitRemoveId:EventEmitter<string>= new EventEmitter<string>()
@Output()emitEditTodo:EventEmitter<Itodo> = new EventEmitter<Itodo>()

  constructor() { }

  ngOnInit(): void {
  }

//EDIT_FUNCTIONALITY

  onEdit(todo:Itodo){
    console.log(todo) // this obj we have to send to parent by using @output ()
this.emitEditTodo.emit(todo)
  }

  //REMOVE_FUNCTIONALITY

onTodoRemove(removeId:string){
console.log(removeId)// here we will get an  removeID  and this removeId we have to send to parent
this.emitRemoveId.emit(removeId)
}
}
