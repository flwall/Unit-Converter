import { Injectable } from '@angular/core';
import { Unit, UnitValue } from '../model/units';
import converter from 'convert-units';

@Injectable({
  providedIn: 'root'
})
export class LengthConverterService {
  get units() {
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
