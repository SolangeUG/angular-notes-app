import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {CardService} from '../services/card.service';

import * as Cards from '../actions/cards';
import {catchError, exhaustMap, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CardsEffects {
  @Effect()
  loadCards$ = this.actions$
    .ofType(Cards.LOAD)
    .pipe(mergeMap(action => {
      return this.cardService$
                  .getCardsList()
                  .pipe(map(res => new Cards.LoadSuccess(res)),
                        catchError(error => of (new Cards.ServerFailure(error)))
                  );
    }));

  @Effect({dispatch: false})
  serverFailure$ = this.actions$
    .ofType(Cards.SERVER_FAILURE)
    .pipe(map((action: Cards.ServerFailure) => action.payload),
          exhaustMap(errors => {
            console.log('Server error happened:', errors);
            return of(null);
          })
    );

  constructor(
    private actions$: Actions,
    private cardService$: CardService
  ) {}
}
