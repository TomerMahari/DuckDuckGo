import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component'
import {DuckService} from './duck.service';
import { RelatedTopics } from './related-topics/related-topics.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RemoveNullPipe } from './remove-null.pipe';
import { HighlightSearch } from './highlight.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    RemoveNullPipe,
    HighlightSearch
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule],
  providers: [DuckService],
  bootstrap: [AppComponent, RelatedTopics]
})
export class AppModule { }
