import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delimiter',
  templateUrl: './delimiter.component.html',
  styleUrls: ['./delimiter.component.scss']
})
export class DelimiterComponent {

  output: string;

  constructor() { }

  replace(input: string, original: string, replaced: string) {
    this.output = input.split(original).join(replaced);
  }

  wrapAndReplace(input: string, original: string, replaced: string, wrap: string) {
    const array = input.split(original);
    for (let i = 0; i < array.length; i++) {
      array[i] = wrap + array[i] + wrap;
    }
    console.log(array);
    this.output = array.join(replaced);
  }

}
