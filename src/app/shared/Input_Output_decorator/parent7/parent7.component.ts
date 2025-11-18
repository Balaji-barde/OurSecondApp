import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent7',
  templateUrl: './parent7.component.html',
  styleUrls: ['./parent7.component.scss']
})
export class Parent7Component implements OnInit {
QALead:string= "Please execute the regression test suite."

  constructor() { }

  ngOnInit(): void {
  }

  msg1!:string
  Onclick(msg:string){
this.msg1=msg
  }

}
