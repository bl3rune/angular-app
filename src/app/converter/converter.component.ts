import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {

  now: number = Date.now();
  date1: Date;
  date2: Date;
  epoch: number;

  constructor() { }

  epochSecondsToDate(input: number) {
    var date = new Date(0);
    date.setUTCSeconds(input);
    this.date1 = date;
  }

  epochMSecondsToDate(input: number) {
    var date = new Date(0);
    date.setUTCMilliseconds(input);
    this.date2 = date;
  }

  dateToEpoch(input: string) {
    this.epoch = new Date(input).getUTCSeconds();
  }

  MS2S(number: number): number { return Math.floor( number / 1000);}

}
