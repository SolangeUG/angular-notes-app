import * as fromCards from './cards';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromRoot from './root';

export interface CardsState {
  cards: fromCards.State;
}

export interface State extends fromRoot.State {
  cards: CardsState;
}

export const reducers = {
  cards: fromCards.reducer
};

/**
 * Cards Reducers
 */
export const getCardsState = createFeatureSelector<CardsState>('cards');
export const getCards = createSelector(
  getCardsState,
  state => state.cards.cards
);
