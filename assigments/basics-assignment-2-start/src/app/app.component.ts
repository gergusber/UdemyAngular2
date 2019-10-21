import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  userNameNotNull = this.username.length > 0;
  constructor() { }
  onClearInput() {
    this.username = '';
  }
}
