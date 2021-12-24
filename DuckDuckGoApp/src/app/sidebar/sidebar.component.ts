import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { DuckService } from '../duck.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  @Input() searchHistory: any;
  @Output() relatedTopicsEmit = new EventEmitter<any>();
  @Output() searchQueryEmit = new EventEmitter<any>();

  constructor(private duckService : DuckService) { }
  reSearch(val:string){
      this.searchQueryEmit.emit(val);
      this.duckService.search(val,true).subscribe(
        res => {
          this.relatedTopicsEmit.emit(res);
          console.log('Response - ',res)},
        err => { console.log('Error => ',err)}
      );
  }

  ngOnInit(): void {

  }

}
