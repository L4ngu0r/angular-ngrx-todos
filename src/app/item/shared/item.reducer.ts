import { ActionReducer, Action } from '@ngrx/store';
import * as fromItemAction from './item.action';
import {Item} from "./item.model";

export interface ItemState {
  items: Item[];
  selectedItem: Item;
}

export const initialState : ItemState = {
  items: [],
  selectedItem: null
};

export const itemReducer: ActionReducer<Object> = (state: ItemState = initialState, action : Action) => {
  switch(action.type){
    case fromItemAction.ActionTypes.ADD_ITEMS:
      return Object.assign({}, state, {
        items: action.payload
      });
    case fromItemAction.ActionTypes.CREATE_ITEM:
      state.items.push(action.payload);
      return state;
    case fromItemAction.ActionTypes.UPDATE_ITEM:
      let nItems = state.items.map(item => {
        return item.id == action.payload.id ? Object.assign({}, item, action.payload) : item;
      });
      return Object.assign({}, state, {
        items: nItems
      });
    case fromItemAction.ActionTypes.DELETE_ITEM:
      let id = action.payload.id;
      let newItems = state.items.filter(item => {
        return item.id !== id;
      });
      return Object.assign({}, state, {
        items: newItems
      });
    case fromItemAction.ActionTypes.SELECT_ITEM:
      return Object.assign({}, state, {
        selectedItem: action.payload
      });
    default:
      return Object.assign({}, state);
  }
};