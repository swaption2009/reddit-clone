import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-article-list-header',
  templateUrl: './article-list-header.component.html',
  styleUrls: ['./article-list-header.component.css']
})
export class ArticleListHeaderComponent implements OnInit {

  private currentFilter: string = 'Time';
  private sortDirection: number = 1;

  constructor() { }

  ngOnInit() {
    jQuery('.ui.dropdown').dropdown();
  }

  changeDirection() {
    // update the direction
    this.sortDirection = this.sortDirection * -1;
    this._updateSort();
  }

  changeSort(filter: string) {
    // update the filter
    if (filter === this.currentFilter) {
      this.changeDirection();
    } else {
      this.currentFilter = filter;
      this._updateSort();
    }
  }

  _updateSort() {
    // call sortBy on the article service
    this.articleService
      .sortBy(
        this.currentFilter,
        this.sortDirection);
  }

}