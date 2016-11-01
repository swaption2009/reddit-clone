import { Component, Input, OnInit } from '@angular/core';
import { Article }                  from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  upvote() {
    console.log("upvote is clicked");
    this.article.voteUp();
  }

  downvote() {
    console.log("downvote is clicked");
    this.article.voteDown();
  }

  ngOnInit() {
  }

}
