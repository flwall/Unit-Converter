export class Unit {
  name: string;
  abbr: any;

  constructor(name: string, abbr: string) {
    this.name = name;
    this.abbr = abbr;
  }

  public equals(o: any) {
    if (o instanceof Unit) {
      const elem: Unit = o;
      return elem.name === this.name && elem.abbr === this.abbr;

    }
    return false;

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
