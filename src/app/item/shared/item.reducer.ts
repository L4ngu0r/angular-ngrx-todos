import { ActionReducer, Action } from '@ngrx/store';
import * as fromItemAction from './item.action';
import {Item} from "./item.model";

export interface ItemState {
  items: Item[];
  selectedItem: Item;
}

const initialState : ItemState = {
  items: [],
  selectedItem: null
};

export const itemReducer: ActionReducer<Object> = (state: ItemState = initialState, action : Action) => {
  switch(action.type){
    case fromItemAction.ActionTypes.ADD_ITEMS:
      console.log('ADD_ITEMS_REDUCER');
      return Object.assign({}, state, {
        items: action.payload
      });
    case fromItemAction.ActionTypes.CREATE_ITEM:
      console.log('CREATE_ITEM_REDUCER');
      console.log(action.payload);
      state.items.push(action.payload);
      return state;
    case fromItemAction.ActionTypes.UPDATE_ITEM:
      console.log('UPDATE_ITEM_REDUCER');
      console.log(action.payload);
      let nItems = state.items.map(item => {
        return item.id == action.payload.id ? Object.assign({}, item, action.payload) : item;
      });
      return Object.assign({}, state, {
        items: nItems
      });
    case fromItemAction.ActionTypes.DELETE_ITEM:
      console.log('DELETE_ITEM_REDUCER');
      console.log(action);
      let id = action.payload.id;
      let newItems = state.items.filter(item => {
        return item.id !== id;
      });
      console.log(newItems);
      return Object.assign({}, state, {
        items: newItems
      });
    case fromItemAction.ActionTypes.SELECT_ITEM:
      console.log('SELECT_ITEM_REDUCER');
      console.log(action.payload);
      let newState = Object.assign({}, state, {
        selectedItem: action.payload
      });
      console.log(newState);
      return newState;
    default:
      return Object.assign({}, state);
  }
};