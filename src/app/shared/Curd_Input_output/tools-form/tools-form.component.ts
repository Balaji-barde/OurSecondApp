import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Itools } from '../../models/tools';

@Component({
  selector: 'app-tools-form',
  templateUrl: './tools-form.component.html',
  styleUrls: ['./tools-form.component.scss'],
})
export class ToolsFormComponent implements OnInit {
  @Output() emitTool: EventEmitter<Itools> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  OnTodoAdd(form: any) {
    console.log(form);
    let newObj: Itools = { ...form.value, id: this.uuid() };
    console.log(newObj);
    form.reset();
    this.emitTool.emit(newObj)
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
