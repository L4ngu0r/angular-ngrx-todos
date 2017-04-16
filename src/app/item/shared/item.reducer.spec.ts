import {itemReducer} from './item.reducer';
import * as fromItem from './item.reducer';
import * as fromItemAction from './item.action';

describe('ItemReducer', () => {

  describe('undefined action', () => {
    it('should return default state', () => {
      const action = {} as any;

      const result = itemReducer(undefined, action);
      expect(result).toEqual(fromItem.initialState);
    });
  });

  describe('ADD_ITEMS', () => {

  });

  describe('CREATE_ITEM', () => {

  });

  describe('UPDATE_ITEM', () => {

  });

  describe('DELETE_ITEM', () => {

  });

  describe('SELECT_ITEM', () => {

  });
});