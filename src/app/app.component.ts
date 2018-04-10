import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Card} from './models/card';
import {Store} from '@ngrx/store';
import * as fromRoot from './reducers';
import * as cards from './actions/cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public cards$: Observable<Card[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.cards$ = this.store.select(fromRoot.getCards);
  }

  addCard(card: Card) {
    this.store.dispatch(new cards.Add(card));
  }

  ngOnInit() {
    this.store.dispatch(new cards.Load());
    this.cards$ = this.store.select(fromRoot.getCards);
  }
}
