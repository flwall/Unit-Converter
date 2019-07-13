import { Injectable } from '@angular/core';
import { Unit, UnitValue } from '../model/units';
import converter from 'convert-units';

@Injectable({
  providedIn: 'root'
})
export class MassConverterService {

  get units() {
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



  constructor() { }

  public convert(num: number, type: Unit): UnitValue[] {

    return this.convertFrom(type, num);
  }
  private convertFrom(from: Unit, val: number): UnitValue[] {
    const list = [];
    this.units.forEach(obj => {
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
