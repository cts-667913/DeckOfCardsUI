import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCardsComponent } from './show-cards/show-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { DeckCardsService } from 'src/deck-cards.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ShowSortedListComponent } from './show-sorted-list/show-sorted-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCardsComponent,
    ShowSortedListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule

  ],
  providers: [DeckCardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
