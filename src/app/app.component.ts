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
      articleService.getArticles()
        .then(articles => this.articles = articles);
  }
}
