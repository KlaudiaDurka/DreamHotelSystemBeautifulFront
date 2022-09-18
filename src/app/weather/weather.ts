export class Weather {
  temperatureValue: number;
  unit: string;


  constructor(temperatureValue: number, unit: string) {
    this.temperatureValue = temperatureValue;
    this.unit = unit;
  }
}
