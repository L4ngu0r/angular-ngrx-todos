import { Action } from '@ngrx/store';

export const ActionTypes = {
  ADD_ITEMS: 'Item added',
  CREATE_ITEM: 'Item created',
  UPDATE_ITEM: 'Item updated',
  DELETE_ITEM: 'Item deleted',
  SELECT_ITEM: 'Item selected'
};

export class addItemsAction implements Action {
  type = ActionTypes.ADD_ITEMS;

  constructor(public payload: any){}
}

export class createItemAction implements Action {
  type = ActionTypes.CREATE_ITEM;

  constructor(public payload: any){}
}

export class updateItemAction implements Action {
  type = ActionTypes.UPDATE_ITEM;

  constructor(public payload: any){}
}

export class deleteItemAction implements Action {
  type = ActionTypes.DELETE_ITEM;

  constructor(public payload: any){}
}

export class selectItemAction implements Action {
  type = ActionTypes.SELECT_ITEM;

  constructor(public payload: any){}
}

export type Actions
  = addItemsAction
  | createItemAction
  | updateItemAction
  | deleteItemAction
  | selectItemAction
  ;