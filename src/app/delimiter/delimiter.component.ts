import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delimiter',
  templateUrl: './delimiter.component.html',
  styleUrls: ['./delimiter.component.css']
})
export class DelimiterComponent {

  output: string;

  constructor() { }

  replace(input: string, a: string, b: string) {
    this.output = input.split(a).join(b);
  }

}
