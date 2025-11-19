import { Component, OnInit } from '@angular/core';
import { Iwarrior } from '../../models/warrior';

@Component({
  selector: 'app-warrior-dashboard',
  templateUrl: './warrior-dashboard.component.html',
  styleUrls: ['./warrior-dashboard.component.scss'],
})
export class WarriorDashboardComponent implements OnInit {
  warroirsArr: Array<Iwarrior> = [
    {
      Wname: 'Karn',
      id: '234',
    },
    {
      Wname: 'Arjun',
      id: '234',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  getNewWarrior(todo:Iwarrior){
this.warroirsArr.push(todo)
  }
}
