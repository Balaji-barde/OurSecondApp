import { Component, Input } from '@angular/core';
import { Imeeting, Istd, Iplaylist } from '../../models/person';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.scss'],
})
export class CompCComponent {
  @Input() meeting!: Imeeting;
  @Input() student!: Istd;

  @Input() playlist!: Iplaylist;
}
