import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {

  output: string;

  constructor() { }

  sort(input: string) {
    this.output = input.split('\n').sort(this.sortable).join('\n');
  }

  sortable(a: string, b: string): number {
    console.log(a.toLowerCase() > b.toLowerCase() ? 1 : (a.toLowerCase() === b.toLowerCase() ? 0 : -1));
    return (a.toLowerCase() > b.toLowerCase() ? 1 : (a.toLowerCase() === b.toLowerCase() ? 0 : -1));
  }

}
