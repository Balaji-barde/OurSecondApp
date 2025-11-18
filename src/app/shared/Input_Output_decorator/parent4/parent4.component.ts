import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent4.component.html',
  styleUrls: ['./parent4.component.scss'],
})
export class Parent4Component implements OnInit {
  MsgFromCoach: string = 'Practice for 2 hours.';

  constructor() {}

  ngOnInit(): void {}

  msg1!: string;
  Onclick(msg: string) {
    this.msg1 = msg;
  }
}
