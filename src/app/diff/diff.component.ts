import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.scss']
})
export class DiffComponent {

  output: string[];

  constructor() { }

  sort(a: string, b: string) {
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
                diffs.push('+::' + right[j]);
                console.log('added');
              }
            }
            diffs.push('=::' + right[i]);
            rightIndex = i + 1;
            return;
          }
        }
        diffs.push('-::' + row);
        console.log('removed');
      });
      for (let i = rightIndex.valueOf(); i < right.length; i++) {
        diffs.push('+::' + right[i]);
        console.log('added');
      }
      diffs.forEach(d => {
        d = d.replace();
      });
      this.output = diffs;
      console.log(diffs);
    }
  }

}
