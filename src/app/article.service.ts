import { Injectable }                   from '@angular/core';
import { Article }                      from './article';
import { environment }                  from '../environments/environment';
import { Http, URLSearchParams }        from '@angular/http';
import { BehaviorSubject, Observable}   from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {
  private _articles: BehaviorSubject<Article[]> =
    new BehaviorSubject<Article[]>([]);

  public articles: Observable<Article[]> = this._articles.asObservable();

  constructor(
    private http: Http
  ) { }

  public getArticles(): void {
    // make http request -> observable
    // convert response into article class
    // update our subject
    this._makeHttpRequest('/v1/articles', 'reddit-r-all')
      .map(json => json.articles)
      .subscribe(articlesJSON => {
        const articles = articlesJSON
          .map(articlesJSON => Article.fromJSON(articlesJSON));
        this._articles.next(articles);
      });
  }

  private _makeHttpRequest(
    path: string,
    sourceKey: string
  ): Observable<any> {
    let params = new URLSearchParams();
    params.set('apiKey', environment.newsApiKey);
    params.set('source', sourceKey);

    return this.http
      .get(`${environment.baseUrl}${path}`, {
        search: params
      }).map(resp => resp.json());
  }

}
