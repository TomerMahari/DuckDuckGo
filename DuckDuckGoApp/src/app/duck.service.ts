import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { RelatedTopics } from './related-topics/related-topics.component'

@Injectable({
  providedIn: 'root'
})
export class DuckService {

  constructor(private http :HttpClient) { }
  readonly domain = 'http://localhost:5001';
  search(query:string, skipWrite:boolean = false){
    const params = new HttpParams({fromString: `query=${query}&skipWrite=${skipWrite}`});
    return this.http.get<RelatedTopics>(this.domain + '/api/SearchEngine',{responseType:'json',params})
  }
  getSearchHistory(){
    return this.http.get<String>(this.domain + '/api/SearchEngine/History',{responseType:'json'})
  }
}
