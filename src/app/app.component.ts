import { Component, Input } from '@angular/core';

class Article {
  constructor(
    public title: string,
    public description: string
  ){}

    public date(): Date {
      return new Date();
    }
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
    <div class="image">
      <img src="https://placekitten.com/g/400/300" />
    </div>
    <div class="content">
      <div class="header">
        {{ article.title }}
      </div>
      <div class="meta">
        Voting and votes will go here
      </div>
      <div class="meta date">
        {{ article.date() | date: 'medium' }}
      </div>
      <div class="meta description">
        <p>
          {{ article.description }}
        </p>
      </div>
      <div class="extra">
        <a 
          href="#"
          target="_blank"
          class="ui right floated button primary">
          Read more
          <i class="right chevron icon"></i>
         </a>
      </div>
    </div>
  `
})
export class ArticleComponent {
  @Input() article: Article;

}

@Component({
  selector: 'app-root',
  template: `
    <div class="ui container">
      <app-sidebar></app-sidebar>
      <div class="ui divided items">
        <app-article 
          *ngFor="let article of articles"
          [article]='article'
          class="item"></app-article>
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
