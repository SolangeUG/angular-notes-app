import {Component} from '@angular/core';
import {CardService} from './services/card.service';
import {Observable} from 'rxjs/Observable';
import {Card} from './models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Notes App';

  public cards$: Observable<Card[]>;

  constructor(private cardService: CardService) {
    this.cards$ = this.cardService.getCardsList();
  }

  addCard(cardText: string) {
    this.cardService.createCard(new Card(cardText));
  }
}
