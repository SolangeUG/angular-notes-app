import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { NewCardInputComponent } from './new-card-input/new-card-input.component';
import { CardService } from './services/card.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    NewCardInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
