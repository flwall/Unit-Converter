import { Component, OnInit } from '@angular/core';
import { Unit, UnitValue } from '../model/units';
import { LengthConverterService } from '../services/length-converter.service';


@Component({
  selector: 'app-length-conversions',
  templateUrl: './length-conversions.component.html',
  styleUrls: ['./length-conversions.component.scss']
})
export class LengthConversionsComponent implements OnInit {

  units: Unit[];
  converted: UnitValue[] = [];

  displayedColumns: string[] = ['unit', 'value'];

  constructor(private converter: LengthConverterService) { }

  ngOnInit() {

    this.units = this.converter.units;

  }


  onSubmit(values: any) {
    const type: Unit = this.units.find(obj => obj.name.toLowerCase() === values.unit);
    this.converted = this.converter.convert(values.num, type);







  }




}
