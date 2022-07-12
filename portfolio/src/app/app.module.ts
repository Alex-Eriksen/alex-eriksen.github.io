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
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { CardModalComponent } from './components/todo/modals/card-modal/card-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditableTextComponent } from './components/editable-text/editable-text.component';

@NgModule({
  	declarations: [
    	AppComponent,
    	HeaderComponent,
    	HomepageComponent,
    	BoardComponent,
    	OverviewComponent,
    	ListComponent,
    	CardComponent,
     CardModalComponent,
     EditableTextComponent
  	],
  	imports: [
    	BrowserModule,
		AppRoutingModule,
		DragDropModule,
		MatDialogModule,
		BrowserAnimationsModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
