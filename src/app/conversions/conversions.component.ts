import { Component, OnInit } from '@angular/core';
import { Unit, UnitValue } from '../model/units';
import { UnitConverterService } from '../services/unit-converter.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-conversions',
  templateUrl: './conversions.component.html',
  styleUrls: ['./conversions.component.scss']
})
export class ConversionsComponent implements OnInit {

  units: Unit[] = [];
  converted: UnitValue[] = [];

  displayedColumns: string[] = ['unit', 'value'];


  constructor(private activatedRouter: ActivatedRoute,
    private converter: UnitConverterService) { }

  ngOnInit() {



    this.activatedRouter.data.subscribe(data => {
      switch (data.unit) {
        case 'home':
          this.units = null;
          break;
        case 'lengths':

          this.units = this.converter.length_units;
          break;
        case 'mass':
          this.units = this.converter.mass_units;
          break;
        case 'area':
          this.units = this.converter.area_units;
          break;
        case 'volume':
          this.units = this.converter.volume_units;
          break;

      }


    });
  }


  onSubmit(values: any) {
    if (values.num === '' || values.unit === '') { return; }

    const type: Unit = this.units.find(obj => obj.name.toLowerCase() === values.unit);
    this.converted = this.converter.convert(values.num, type);

  }




}
