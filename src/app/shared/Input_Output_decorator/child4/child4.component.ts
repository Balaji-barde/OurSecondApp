import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss'],
})
export class Child4Component implements OnInit {
  @Input() MsgFromC!: string;
  @Output() MsgFromPlayer: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // this.MsgFromPlayer.emit("Okay Coach, I will practice.")
  }

  onClick(){
    this.MsgFromPlayer.emit("Okay Coach, I will practice.")

  }
}
