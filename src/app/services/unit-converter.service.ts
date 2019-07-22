import { Injectable } from '@angular/core';
import { Unit, UnitValue } from '../model/units';
import converter from 'convert-units';


@Injectable({
  providedIn: 'root'
})
export class UnitConverterService {

  get length_units() {
    return [
      new Unit('Kilometres', 'km'),
      new Unit('Miles', 'mi'),
      new Unit('Metres', 'm'),
      new Unit('Centimetres', 'cm'),
      new Unit('Millimetres', 'mm'),
      new Unit('Inch', 'in'),
      new Unit('Yards', 'yd'),
      new Unit('Feet', 'ft'),
      new Unit('U.S. Survey Feet', 'ft-us')

    ];
  }
  get mass_units() {
    return [
      new Unit('Kilogram', 'kg'),
      new Unit('Gramm', 'g'),
      new Unit('Ton', 't'),
      new Unit('Microgram', 'mcg'),
      new Unit('Milligram', 'mg'),
      new Unit('Metric Ton', 'mt'),
      new Unit('Ounce', 'oz'),
      new Unit('Pound', 'lb')


    ]




  }
  get area_units(){
    return [
      new Unit('Square Millimeter', 'mm2'),
      new Unit('Square Centimeter', 'cm2'),
      new Unit('Square Meter', 'm2'),
      new Unit('Hectare', 'ha'),
      new Unit('Square Kilometer', 'km2'),
      new Unit('Square Inch', 'in2'),
      new Unit('Square Yard', 'yd2'),
      new Unit('Square Foot', 'ft2'),
      new Unit('Acre', 'ac'),
      new Unit('Square Mile', 'mi2')


    ]


  }

  private unitTypes: Unit[][] = [this.length_units, this.mass_units, this.area_units];


  constructor() { }

  public convert(num: number, type: Unit): UnitValue[] {

    return this.convertFrom(type, num);
  }

  private indexOf(units: Unit[], elem: Unit): number {

    let idx = -1;
    units.forEach((e, i) => {

      if (e.equals(elem)) {
        idx = i;
      }


    });
    return idx;

  }

  private convertFrom(from: Unit, val: number): UnitValue[] {
    const list = [];
    let units: Unit[] = null;
    this.unitTypes.forEach((elem, idx) => {
      if (this.indexOf(elem, from) !== -1) {
        units = elem;
      }

    });
    if (units == null) {
      console.log(from);
      console.log('Unit is a unknown unit');
      throw new Error('Unit '+from.name+" is a unknown unit");

    }

    units.forEach(obj => {
      try {
        let res: number = converter(val)
          .from(from.abbr)
          .to(obj.abbr);
        res = Math.round(res);
        res /= 10_000;

        const value = new UnitValue(res, obj);
        list.push(value);
      } catch (e) {
        console.log(e);
      }
    });
    return list;
  }

}
