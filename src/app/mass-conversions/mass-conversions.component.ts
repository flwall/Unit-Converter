import { Component, OnInit } from '@angular/core';
import { MassConverterService } from '../services/mass-converter.service';
import { Unit, UnitValue } from '../model/units';

@Component({
  selector: 'app-mass-conversions',
  templateUrl: './mass-conversions.component.html',
  styleUrls: ['./mass-conversions.component.scss']
})
export class MassConversionsComponent implements OnInit {

  units: Unit[];
  converted: UnitValue[] = [];

  displayedColumns: string[] = ['unit', 'value'];


  constructor(private converter: MassConverterService) { }

  ngOnInit() {

    this.units = this.converter.units;



  }

  public onSubmit(values: any) {
    if (values.num === '' || values.unit === '') { return; }

    const type: Unit = this.units.find(obj => obj.name.toLowerCase() === values.unit);
    this.converted = this.converter.convert(values.num, type);


  }

}
