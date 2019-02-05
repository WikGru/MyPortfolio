import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  doScroll(x) {
    const element =  document.getElementById(x);
    element.scrollIntoView();
    window.scrollBy(0, -73);
  }
  gotoTop() {
    window.scrollTo(0, 0);
  }
}
