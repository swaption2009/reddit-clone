import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <div id="sidebar">
      Sidebar will go here
    </div>
  `
})
export class SidebarComponent {

}

@Component({
  selector: 'app-root',
  templateUrl: `
    <h1>Hello, {{ title }}</h1>
    <app-sidebar></app-sidebar>
    <div id="container">
      <div id="content">
        <div>
          Content will go here
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ron!';
}
