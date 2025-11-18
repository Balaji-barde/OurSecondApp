import { Component, OnInit } from '@angular/core';
import { mergeScan } from 'rxjs';

@Component({
  selector: 'app-parent5',
  templateUrl: './parent5.component.html',
  styleUrls: ['./parent5.component.scss']
})
export class Parent5Component implements OnInit {

  MsgFromTeamLead:string= "Please deploy the new build to the testing environment."

  constructor() { }

  ngOnInit(): void {
  }

  msg1!:string
  Onclick(msg:string){
    this.msg1=msg
  }
}
