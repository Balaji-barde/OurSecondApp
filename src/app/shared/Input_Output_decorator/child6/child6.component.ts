import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.scss'],
})
export class Child6Component implements OnInit {
  @Input() MsgFromSeniorD!: string;
  @Output() JuniorDev: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // this.JuniorDev.emit("Okay, I will update it and push the changes.")
  }
  
  Onclick(){
    this.JuniorDev.emit("Okay, I will update it and push the changes.")
    
  }

}
