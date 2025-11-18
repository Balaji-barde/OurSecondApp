import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component implements OnInit {
  @Input() MsgFromT!: string;
  @Output() MsgFromStd: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    // this.MsgFromStd.emit('Yes i will send the assignment')
  }

  Onclick(){
    this.MsgFromStd.emit('Yes i will send the assignment')

  }
}
