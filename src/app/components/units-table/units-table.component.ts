import { Component, OnInit, Input } from '@angular/core';
import { UnitValue } from '../../model/units';

@Component({
  selector: 'app-units-table',
  templateUrl: './units-table.component.html',
  styleUrls: ['./units-table.component.scss']
})
export class UnitsTableComponent implements OnInit {

  @Input()
  public converted: UnitValue[];

  @Input()
  public displayedColumns: string[];


  constructor() { }

  ngOnInit() {
  }

}
