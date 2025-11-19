import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEmployee } from '../../models/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  constructor() {}
  @Output()emitTodo:EventEmitter<IEmployee> =new EventEmitter()
  ngOnInit(): void {}

  OnToDoAdd(form: any) {
    console.log(form);
    let todoObj: IEmployee = { ...form.value, id: this.uuid() };
    console.log( todoObj);
    form.reset();
    this.emitTodo.emit(todoObj)
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
