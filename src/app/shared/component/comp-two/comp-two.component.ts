import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.scss'],
})
export class CompTwoComponent implements OnInit {
  @Input() MsgFromP!: string;
  //output step1
  @Output() MsgFromChild:EventEmitter<string>=new EventEmitter()
  constructor() {}

  ngOnInit(): void {
    // step 2
    // this.MsgFromChild.emit('yes i work hard')
  }

  Onclick(){
    this.MsgFromChild.emit('yes i work hard')

  }
}
