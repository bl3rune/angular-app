import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {

  now: number = Date.now();
  date: Date;
  date2: Date;
  epoch: number;

  constructor() { }

  epochMSecondsToDate(input: number) {
    const d = new Date(0);
    d.setUTCMilliseconds(input);
    this.date = d;
  }

  dateToEpoch(input: string) {
    this.epoch = new Date(input).getUTCSeconds();
  }

}
