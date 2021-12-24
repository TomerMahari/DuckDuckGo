import { Component, OnInit, Input } from '@angular/core';
import { RelatedTopics } from '../related-topics/related-topics.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor() { }
  @Input() model: RelatedTopics = new RelatedTopics;
  _HighlightText: string = '';
  get HighlightText(): string {
      return this._HighlightText;
  }
  @Input() set HighlightText(value: string) {
      this._HighlightText = value;
      this.transText(value);
  }
  text:string = '';


  transText(args: any): any {
    this.text = this.text.replace('<mark>','').replace('</mark>','')
    if (!args) {return;}
    var re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
    this.text = this.text.replace(re, "<mark>$&</mark>");
  }
  ngOnInit(): void {
    this.text = this.model.text;
    this.transText(this.HighlightText);
  }

}
