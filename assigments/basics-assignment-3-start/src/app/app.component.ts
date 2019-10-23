import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[` 
  .online{
      color: white;
  }
  `]
})
export class AppComponent {
buttonState=false;
clicks=0;

 /**
 *
 */
constructor() {
}

onChange(){
  this.buttonState=!this.buttonState;
  this.clicks+=1;
}

}
