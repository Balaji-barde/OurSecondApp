import { Component, Input, OnInit } from '@angular/core';
import { Iwarrior } from '../../models/warrior';

@Component({
  selector: 'app-warrior-list',
  templateUrl: './warrior-list.component.html',
  styleUrls: ['./warrior-list.component.scss']
})
export class WarriorListComponent implements OnInit {
  @Input() warroirs!:Array<Iwarrior>
  constructor() { }

  ngOnInit(): void {
  }

}
