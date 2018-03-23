import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ListViewComponent } from './views/list-view/list-view.component';
import { ContactViewComponent } from './views/contact-view/contact-view.component';
import { BlogViewComponent } from './views/blog-view/blog-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';
import { ViewService } from './services/view.service';
import { ListInputComponent } from './components/list/list-input/list-input.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavBarComponent,
    HomeViewComponent,
    ListViewComponent,
    ContactViewComponent,
    BlogViewComponent,
    NotFoundViewComponent,
    ListInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
