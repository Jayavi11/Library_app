import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { ViewBooksComponent } from './view-books/view-books.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBooksComponent,
    DeleteBookComponent,
    SearchBookComponent,
    ViewBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
