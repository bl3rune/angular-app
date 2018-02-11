import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.css']
})
export class DiffComponent {

  output: string;

  constructor() { }

  sort(a: string, b: string) {
    if (a && b) {
      const left = a.split('\n');
      const right = b.split('\n');
    }
  }

}
