import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iwarrior } from '../../models/warrior';

@Component({
  selector: 'app-warrior-form',
  templateUrl: './warrior-form.component.html',
  styleUrls: ['./warrior-form.component.scss'],
})
export class WarriorFormComponent implements OnInit {
  @Output() emitTodo: EventEmitter<Iwarrior> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  OnTodoAdd(form: any) {
    console.log(form);
    let newObj: Iwarrior = { ...form.value, id: this.uuid() };
    console.log(newObj);
    form.reset();
    this.emitTodo.emit(newObj)
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
