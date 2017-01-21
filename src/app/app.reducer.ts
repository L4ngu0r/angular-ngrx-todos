import {combineReducers} from '@ngrx/store';
import * as fromItem from './item/shared/item.reducer';

export const reducers = {
  items: fromItem.itemReducer
};

const productionReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return productionReducer(state, action);
}
