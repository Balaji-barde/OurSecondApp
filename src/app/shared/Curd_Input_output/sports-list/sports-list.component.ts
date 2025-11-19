import { Component, Input, OnInit } from '@angular/core';
import { Isport } from '../../models/sports';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.scss'],
})
export class SportsListComponent implements OnInit {
  @Input()sport!: Array<Isport>;
  constructor() {}

  ngOnInit(): void {}
}
