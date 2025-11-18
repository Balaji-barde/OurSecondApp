import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child7',
  templateUrl: './child7.component.html',
  styleUrls: ['./child7.component.scss']
})
export class Child7Component implements OnInit {
 @Input()QALead!:string

 @Output()Tester:EventEmitter<string> =new EventEmitter() 

  constructor() { }

  ngOnInit(): void {
    // this.Tester.emit("I will start the execution and log the results.")
  }

  Onclick(){
    this.Tester.emit("I will start the execution and log the results.")

  }
}
