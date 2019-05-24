import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regex',
  templateUrl: './regex.component.html',
  styleUrls: ['./regex.component.scss']
})
export class RegexComponent {

  isMatch: boolean;

  constructor() { }

  match(input: string, regex: string, flags: string) {
    if (input && regex) {
      this.isMatch = new RegExp(regex, flags).test(input);
    } else {
      this.isMatch = null;
    }
  }
}
