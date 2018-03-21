import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ListViewComponent } from './views/list-view/list-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavBarComponent,
    HomeViewComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
