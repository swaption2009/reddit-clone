import { Component, Input } from '@angular/core';

class Article {
  constructor(
    public title: string,
    public description: string
  ){}
}

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
      <p>{{ article.description }}</p>
    </div>
  `
})
export class ArticleComponent {
  @Input() article: Article;

}

@Component({
  selector: 'app-root',
  templateUrl: `
    <h1>Hello, {{ title }}</h1>
    <app-sidebar></app-sidebar>
    <div id="container">
      <div id="content">
        <app-article 
          *ngFor="let article of articles"
          [article]='article'></app-article>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  title = 'Ron';

  constructor() {
    this.articles = [
      new Article(
      'The Angular 2 screencast',
      'The easiest way to learn Angular 2'
      ),
      new Article(
      'Fullstack React',
      'Let\'s learn React'
      ),
      new Article(
      'Vue is new',
      'Vue 2.0 is lightweight'
      )];
  }
}
