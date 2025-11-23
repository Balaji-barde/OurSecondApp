import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/models/todos_Interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit, OnChanges {
  @ViewChild('formTodo') todoform!: NgForm;
  _matsnackbar: any;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    if (changes['getEditTodo'].currentValue) {
      this.isInEditMode = true;

      this.todoform.form.patchValue(changes['getEditTodo'].currentValue);
    }
  }

  @Output() emitTodo: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Input() getEditTodo!: Itodo;

  @Output() emitUpdatedObj: EventEmitter<Itodo> = new EventEmitter<Itodo>();

  ngOnInit(): void {}
  isInEditMode: boolean = false;

  OnTodoAdd(form: NgForm) {
    console.log(form);
    let newObj: Itodo = {
      ...form.value,
      todoId: this.uuid(),
    };
    console.log(newObj);
    this.emitTodo.emit(newObj);
    form.reset();
console.log('before snack')
console.log('snackbar instance:', this._matsnackbar);
if (!this._matsnackbar) console.error('MatSnackBar is undefined here!');

this._matsnackbar.open(
  `The todo Item with id ${newObj.todoId} is added successfully!!!!!!!
  `,
  'close',
  {
    duration: 3000,
  }
);
console.log('before after')
  }

  

  onToDoUpdate() {
    if (this.todoform.valid) {
      let Updated_Obj: Itodo = {
        ...this.todoform.value,
        todoId: this.getEditTodo.todoId,
      };
      this.emitUpdatedObj.emit(Updated_Obj);
      this.isInEditMode = false;
      this.todoform.reset();
      console.log(Updated_Obj);
    }
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
