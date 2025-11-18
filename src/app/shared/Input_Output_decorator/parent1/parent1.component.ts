import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {
   MsgFromParent:string='work hard party hard'
  constructor() { }

  ngOnInit(): void {
  }

  msg1!:string
  Onclick(msg:string){
    this.msg1=msg
  }
}
