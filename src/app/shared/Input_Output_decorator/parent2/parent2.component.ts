import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss'],
})
export class Parent2Component implements OnInit {
  MsgFromTeacher: string = 'Submit your assignment today.';

  constructor() {}

  ngOnInit(): void {}

  msg1!: string;
  Onclick(msg: string) {
    this.msg1 = msg;
  }
}
