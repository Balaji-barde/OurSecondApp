import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent6',
  templateUrl: './parent6.component.html',
  styleUrls: ['./parent6.component.scss'],
})
export class Parent6Component implements OnInit {
  MsgFromSeniorDev: string =
    'Update the API integration as per the latest requirement.';

  constructor() {}

  ngOnInit(): void {}
msg1!:string
  Onclick(msg:string){
this.msg1=msg
  }
}
