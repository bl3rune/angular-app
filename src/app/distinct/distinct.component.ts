import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.scss']
})
export class DistinctComponent {

  output: string;
  duplicates: string;
  nonDuplicates: string;

  constructor() { }

  distinct(input: string) {
    const split = input.split('\n');
    const out = [];
    const dupes = [];
    let nonDuplicates = [];
    for (const a of split) {
      if (!out.includes(a)) {
        out.push(a);
        nonDuplicates.push(a);
      } else if (dupes.find(d => d['name'] === a)) {
        dupes.find(d => d['name'] === a)['x']++;
      } else {
        dupes.push({'name': a, 'x': 1});
        nonDuplicates = nonDuplicates.filter(nd => nd !== a);
      }
    }
    this.output = out.join('\n');
    this.duplicates = '';
    dupes.forEach(d => this.duplicates += d['x'] + '* :: ' + d['name'] + '\n');
    this.nonDuplicates = nonDuplicates.join('\n');
  }

}
