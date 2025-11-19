import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Isport } from '../../models/sports';

@Component({
  selector: 'app-sports-form',
  templateUrl: './sports-form.component.html',
  styleUrls: ['./sports-form.component.scss'],
})
export class SportsFormComponent implements OnInit {
  @Output() emitTodo: EventEmitter<Isport> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  OnTodoAdd(form: any) {
    console.log(form);
    let newObj: Isport = { ...form.value, id: this.uuid() };
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
