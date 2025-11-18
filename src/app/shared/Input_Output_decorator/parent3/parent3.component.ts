import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.scss'],
})
export class Parent3Component implements OnInit {
  MsgFromBoss: string = 'Finish the report by evening.';

  constructor() {}

  ngOnInit(): void {}

  msg1!: string;

  Onclick(msg: string) {
    this.msg1 = msg;
  }
}
