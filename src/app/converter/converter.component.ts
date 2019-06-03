import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {

  now: number = Date.now();
  date: Date;
  epoch: number;

  constructor() { }

  epochMSecondsToDate(input: number) {
    const d = new Date(0);
    d.setUTCMilliseconds(input);
    d.setUTCHours(0);
    d.setUTCMinutes(0);
    d.setUTCSeconds(0);
    this.date = d;
  }

  dateToEpoch(input: Date) {
    this.epoch = input.valueOf();
  }

}
