import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  dropdown: boolean;

  constructor() { this.dropdown = false; }

  drop() {
    this.dropdown = !this.dropdown;
  }

}
