import { Injectable } from '@angular/core';
import { Article }    from "./article";

@Injectable()
export class ArticleService {

  constructor() { }

  public getArticles(): Article[] {
    return [
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
