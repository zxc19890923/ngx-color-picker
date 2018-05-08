import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public initColor: string = "#468dcc";
  getChangeColor(event) {
    console.log(event);
  }
}
