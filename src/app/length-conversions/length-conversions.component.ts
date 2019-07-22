import { Component, OnInit } from '@angular/core';
import { Unit, UnitValue } from '../model/units';
import { UnitConverterService } from '../services/unit-converter.service';



@Component({
  selector: 'app-length-conversions',
  templateUrl: './length-conversions.component.html',
  styleUrls: ['./length-conversions.component.scss']
})
export class LengthConversionsComponent implements OnInit {

  units: Unit[];
  converted: UnitValue[] = [];

  displayedColumns: string[] = ['unit', 'value'];

  constructor(private converter: UnitConverterService) { }

  ngOnInit() {

    this.units = this.converter.length_units;

  }


  onSubmit(values: any) {
    if (values.num === '' || values.unit === '') { return; }

    const type: Unit = this.units.find(obj => obj.name.toLowerCase() === values.unit);
    this.converted = this.converter.convert(values.num, type);

  }




}
