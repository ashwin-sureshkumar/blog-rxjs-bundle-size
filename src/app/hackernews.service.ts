import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://node-hnapi.herokuapp.com';

@Injectable()
export class HackerNewsService {

  constructor(private http: Http) { }

  getLatestStories(page: number = 1) {
    return this.http.get(`${BASE_URL}/news?page=${page}`)
      .pipe(
        map((response: Response) => response.json())
      );
  }

  getUser(id: string) {
    return this.http.get(`${BASE_URL}/user/${id}`)
      .pipe(
        map((response: Response) => response.json())
      );
  }

}
