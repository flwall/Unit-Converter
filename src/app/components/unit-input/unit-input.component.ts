import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Unit } from '../../model/units';

@Component({
  selector: 'app-unit-input',
  templateUrl: './unit-input.component.html',
  styleUrls: ['./unit-input.component.scss']
})
export class UnitInputComponent implements OnInit {

  @Output()
  public emitter: EventEmitter = new EventEmitter();

  @Input()
  public units: Unit[];




  constructor() { }

  ngOnInit() {
  }




}
