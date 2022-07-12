import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/main/homepage/homepage.component';
import { BoardComponent } from './components/todo/board/board.component';
import { OverviewComponent } from './components/main/overview/overview.component';
import { ListComponent } from './components/todo/list/list.component';
import { CardComponent } from './components/todo/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    BoardComponent,
    OverviewComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
