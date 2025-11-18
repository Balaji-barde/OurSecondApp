import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
})
export class Child1Component implements OnInit {
  @Input() MsgFP!: string;
  @Output() MsgFromchild: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // this.MsgFromchild.emit('yes I will work hard!!!!')
  }
  Onclick() {
    this.MsgFromchild.emit('Yes i will work hard');
  }
}
