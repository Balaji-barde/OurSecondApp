import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.scss'],
})
export class Child5Component implements OnInit {
  @Input() MsgFromTeamL!: string;
  @Output() MsgFromDeveloper: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // this.MsgFromDeveloper.emit("Sure, I’ll deploy it and share the update shortly.")
  }

  Onclick(){
    this.MsgFromDeveloper.emit("Sure, I’ll deploy it and share the update shortly.")

  }
}
