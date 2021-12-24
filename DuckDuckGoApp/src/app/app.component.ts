import { Component } from '@angular/core';
import {DuckService} from './duck.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private duckService : DuckService) {}
  searchQuery: any = '';
  findQuery: string = '';
  title = 'Duck Duck Go!!';
  opened = true;
  p: number = 0
  toggleSidebar(){
    this.opened = !this.opened;
  }
  relatedTopics:any = [];

  searchHistory: any = [];
  search(searchVal:string){

    console.log('this.searchQuery - ',searchVal)
      this.searchHistory.push(searchVal)
    this.duckService.search(searchVal).subscribe(
      res => {
        this.relatedTopics = res;
        console.log('Response - ',res)},
      err => { console.log('Error => ',err)}
    );
  }
  updateRelatedTopics(topicsArr:any){
    this.relatedTopics = topicsArr;
  }
  searchQueryUpdate(query:string){
    this.searchQuery = query;
  }
  updateHighlightText(findTxt: string){
    this.findQuery = findTxt;
  }
  ngOnInit(): void {
    this.duckService.getSearchHistory().subscribe(
      res => {
        this.searchHistory = res;
      },
      err => {
        console.log('Error on GetHistory - ',err);
      }
    );
  }
}
