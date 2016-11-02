import { Injectable }             from '@angular/core';
import { Article }                from './article';
import { Http, URLSearchParams }  from '@angular/http';
import 'rxjs/add/operator/toPromise';

const baseUrl = 'https://newsapi.org';
const newsApiKey = '793984372a2b4aad9dddc711b810b1cf';

@Injectable()
export class ArticleService {

  constructor(
    private http: Http
  ) { }

  public getArticles(): Promise<Article[]> {
    let params = new URLSearchParams();
    params.set('apiKey', newsApiKey);
    params.set('source', 'reddit-r-all');

    return this.http
      .get(`${baseUrl}/v1/articles`, {
        search: params
      })
      .toPromise()
      .then(resp => resp.json())
      .then(json => json.articles)
      .then(articles => {
        console.log('json ->', articles);
        return articles
          .map(article => Article.fromJSON(article));
      })
      .catch(err => {
        console.log('We got an error', err);
      });
  }

}
