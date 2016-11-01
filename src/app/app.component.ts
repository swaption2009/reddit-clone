import { Component, Input } from '@angular/core';
import { Article }          from './article';
import { ArticleService }   from "./article.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(
    private articleService: ArticleService
  ) {
    this.articles = [
      new Article(
      'The Angular 2 screencast',
      'The easiest way to learn Angular 2',
        10
      ),
      new Article(
      'Fullstack React',
      'Let\'s learn React',
        8
      ),
      new Article(
      'Vue is new',
      'Vue 2.0 is lightweight',
        15
      )];
  }
}
