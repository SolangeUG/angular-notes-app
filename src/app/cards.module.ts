import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main/main.component';
import {NewCardInputComponent} from './new-card-input/new-card-input.component';
import {CardListComponent} from './card-list/card-list.component';
import {CardComponent} from './card/card.component';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {RouterModule, Routes} from '@angular/router';
import {CardsEffects} from './effects/cards';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './reducers';
import {StoreModule} from '@ngrx/store';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardService} from './services/card.service';

const routes: Routes = [
  {path: '', redirectTo: 'cards', pathMatch: 'full'},
  {path: 'cards', component: MainComponent},
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('cards', reducers),
    EffectsModule.forFeature([CardsEffects]),
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [CardService],
  declarations: [
    CardComponent,
    CardListComponent,
    NewCardInputComponent,
    MainComponent
  ]
})
export class CardsModule { }
