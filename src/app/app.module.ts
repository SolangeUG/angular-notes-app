import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {AppComponent} from './app.component';
import {CardService} from './services/card.service';
import {metaReducers, reducers} from './reducers/root';
import {CardsEffects} from './effects/cards';
import {AboutComponent} from './about/about.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'cards', pathMatch: 'full'},
  {path: 'cards', loadChildren: './cards.module#CardsModule'},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([CardsEffects]),
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
