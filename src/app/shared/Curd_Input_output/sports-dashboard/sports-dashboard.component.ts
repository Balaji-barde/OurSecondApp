import { Component, OnInit } from '@angular/core';
import { Isport } from '../../models/sports';

@Component({
  selector: 'app-sports-dashboard',
  templateUrl: './sports-dashboard.component.html',
  styleUrls: ['./sports-dashboard.component.scss'],
})
export class SportsDashboardComponent implements OnInit {
  sportsArr: Array<Isport> = [
    {
      sportsName: 'Cricket',
      sportsId: '123',
    },
    {
      sportsName: 'Football',
      sportsId: '123',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  newSports(newObj:Isport){
this.sportsArr.push(newObj)
  }

}
