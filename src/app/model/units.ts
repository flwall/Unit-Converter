export class Unit {
  name: string;
  abbr: any;

  constructor(name: string, abbr: string) {
    this.name = name;
    this.abbr = abbr;
  }
}

export class UnitValue {
  value: number;
  unit: Unit;

  constructor(val: number, unit: Unit) {
    this.value = val;
    this.unit = unit;
  }
}
