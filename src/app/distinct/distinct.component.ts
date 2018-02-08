import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.css']
})
export class DistinctComponent {

  output: string;

  constructor() { }

  distinct(input: string) {
    const split = input.split('\n');
    const out = [];
    for (const a of split) {
      if (!out.includes(a)) {
        out.push(a);
      }
    }
    this.output = out.join('\n');
  }

}
