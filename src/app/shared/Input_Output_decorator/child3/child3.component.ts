import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss'],
})
export class Child3Component implements OnInit {
  @Input() MsgFromB!: string;

  @Output() MSgFromEmployee: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // this.MSgFromEmployee.emit("Sure, I will complete it.")
  }

  Onclick(){
    this.MSgFromEmployee.emit("Sure, I will complete it.")

  }
}
