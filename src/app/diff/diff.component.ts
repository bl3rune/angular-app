import { Component } from '@angular/core';

@Component({
  selector: 'jstt-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.scss']
})
export class DiffComponent {

  output: string[];

  constructor() { }

  diff(a: string, b: string) {
    if (a && b) {
      const left = a.split('\n');
      const right = b.split('\n');
      const diffs = [];
      let rightIndex = 0;
      left.forEach(row => {
        for (let i = rightIndex.valueOf(); i < right.length; i++) {
          if (right[i] === row) {
            if (i !== rightIndex.valueOf()) {
              for (let j = rightIndex.valueOf(); j < i; j++) {
                diffs.push('+::' + right[j]); // ADDED
              }
            }
            diffs.push('=::' + right[i]); // EQUALS
            rightIndex = i + 1;
            return;
          }
        }
        diffs.push('-::' + row); // REMOVED
      });
      for (let i = rightIndex.valueOf(); i < right.length; i++) {
        diffs.push('+::' + right[i]); // ADDED
      }
      this.output = diffs;
    }
  }

}
