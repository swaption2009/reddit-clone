import { Component, Input } from '@angular/core';

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
  selector: 'app-article',
  template: `
    <div id="article">
      <h2>{{ article.title }}</h2>
    </div>
  `
})
export class ArticleComponent {
  @Input('article') article: Object;
}

@Component({
  selector: 'app-root',
  templateUrl: `
    <h1>Hello, {{ title }}</h1>
    <app-sidebar></app-sidebar>
    <div id="container">
      <div id="content">
        <app-article [article]='article'></app-article>
        <app-article></app-article>
        <app-article></app-article>
        <app-article></app-article>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  article: Object;

  constructor() {
    this.article = {
      title: 'The Angular 2 screencast',
      description: 'The easiest way to learn Angular 2'
    }
  }
}
