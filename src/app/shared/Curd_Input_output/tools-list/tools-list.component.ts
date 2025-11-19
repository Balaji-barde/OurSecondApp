import { Component, Input, OnInit } from '@angular/core';
import { Itools } from '../../models/tools';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.scss']
})
export class ToolsListComponent implements OnInit {
   @Input()tools!:Array<Itools>
  constructor() { }

  ngOnInit(): void {
  }

}
