import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-output-block',
  templateUrl: './output-block.component.html',
  styleUrls: ['./output-block.component.scss']
})
export class OutputBlockComponent {

  @Input() output: string;
  @Input() title?: string;

  constructor() { }

  copy(inputElement) {
    inputElement.select();
    document.execCommand('copy');
  }

}
