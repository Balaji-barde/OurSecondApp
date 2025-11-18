import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.scss'],
})
export class CompOneComponent implements OnInit {
  MsgFromParent: string = 'work hard party hard';
  msg(msg: string) {
    this.msg1 = msg;
  }
  msg1!: string;
  constructor() {}

  ngOnInit(): void {}
}
