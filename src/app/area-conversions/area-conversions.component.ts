import { Component, OnInit } from '@angular/core';
import { UnitConverterService } from '../services/unit-converter.service';
import { Unit, UnitValue } from '../model/units';

@Component({
  selector: 'app-area-conversions',
  templateUrl: './area-conversions.component.html',
  styleUrls: ['./area-conversions.component.scss']
})
export class AreaConversionsComponent implements OnInit {

  units: Unit[];
  converted: UnitValue[] = [];

  displayedColumns: string[] = ['unit', 'value'];


  constructor(private converter: UnitConverterService) { }


  ngOnInit() {

    this.units = this.converter.area_units;

  }


  onSubmit(values: any) {
    if (values.num === '' || values.unit === '') { return; }

    const type: Unit = this.units.find(obj => obj.name.toLowerCase() === values.unit);
    this.converted = this.converter.convert(values.num, type);

  }

}
