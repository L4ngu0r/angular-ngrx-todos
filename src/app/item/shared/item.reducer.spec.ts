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
    it('should add items on init', () => {
      const addItemsAction = new fromItemAction.addItemsAction(
        [
          {
            "name": "Testhsqbd",
            "description": "qofbds",
            "timestamp": "1494446346807",
            "id": "6.bnc41424dc"
          },
          {
            "name": "dfvsd",
            "description": "sdfvds",
            "timestamp": "1494446657125",
            "id": "0.93qv0ticpig"
          }
        ]
      );

      const expectedResults = {
        items: [
          {
            "name": "Testhsqbd",
            "description": "qofbds",
            "timestamp": "1494446346807",
            "id": "6.bnc41424dc"
          },
          {
            "name": "dfvsd",
            "description": "sdfvds",
            "timestamp": "1494446657125",
            "id": "0.93qv0ticpig"
          }
        ],
        selectedItem: null
      };

      const result = itemReducer(fromItem.initialState, addItemsAction);
      expect(result).toEqual(expectedResults);
    });
  });

  describe('CREATE_ITEM', () => {
    it('should add an entry in items (already exists)', () => {
      const initial = {
        items: [
          {
            "name": "Testhsqbd",
            "description": "qofbds",
            "timestamp": "1494446346807",
            "id": "6.bnc41424dc"
          }
        ],
        selectedItem: null
      };

      const createItemAction = new fromItemAction.createItemAction(
        {
          "name": "dfvsd",
          "description": "sdfvds",
          "timestamp": "1494446657125",
          "id": "0.93qv0ticpig",
        }
      );

      const expectedResults = {
        items: [
          {
            "name": "Testhsqbd",
            "description": "qofbds",
            "timestamp": "1494446346807",
            "id": "6.bnc41424dc"
          },
          {
            "name": "dfvsd",
            "description": "sdfvds",
            "timestamp": "1494446657125",
            "id": "0.93qv0ticpig"
          }
        ],
        selectedItem: null
      };

      const result = itemReducer(initial, createItemAction);
      expect(result).toEqual(expectedResults);
    });

    it('should add an entry in items (none)', () => {
      const createItemAction = new fromItemAction.createItemAction(
        {
          "name": "dfvsd",
          "description": "sdfvds",
          "timestamp": "1494446657125",
          "id": "0.93qv0ticpig"
        }
      );

      const expectedResults = {
        items: [
          {
            "name": "dfvsd",
            "description": "sdfvds",
            "timestamp": "1494446657125",
            "id": "0.93qv0ticpig"
          }
        ],
        selectedItem: null
      };

      const result = itemReducer(fromItem.initialState, createItemAction);
      expect(result).toEqual(expectedResults);
    });
  });

  describe('UPDATE_ITEM', () => {
    it('should update an existing item', () => {
      const initial = {
        items: [
          {
            "name": "dfvsd",
            "description": "sdfvds",
            "timestamp": "1494446657125",
            "id": "0.93qv0ticpig"
          }
        ],
        selectedItem: null
      };

      const updateItemAction = new fromItemAction.updateItemAction(
        {
          "name": "dfvsd",
          "description": "New desc",
          "timestamp": "1494446657125",
          "id": "0.93qv0ticpig"
        }
      );

      const expectedResults = {
        items : [
          {
            "name": "dfvsd",
            "description": "New desc",
            "timestamp": "1494446657125",
            "id": "0.93qv0ticpig"
          }
        ],
        selectedItem: null
      };

      const result = itemReducer(initial, updateItemAction);
      expect(result).toEqual(expectedResults);
    });
  });

  describe('DELETE_ITEM', () => {
    it('should remove one item', () => {
      const initial = {
        items: [
          {
            "name": "Testhsqbd",
            "description": "qofbds",
            "timestamp": "1494446346807",
            "id": "6.bnc41424dc"
          },
          {
            "name": "dfvsd",
            "description": "sdfvds",
            "timestamp": "1494446657125",
            "id": "0.93qv0ticpig"
          }
        ],
        selectedItem: null
      };

      const deleteItemAction = new fromItemAction.deleteItemAction(
        {
          "name": "Testhsqbd",
          "description": "qofbds",
          "timestamp": "1494446346807",
          "id": "6.bnc41424dc"
        }
      );
      const expectedResults = {
        items: [
          {
            "name": "dfvsd",
            "description": "sdfvds",
            "timestamp": "1494446657125",
            "id": "0.93qv0ticpig"
          }
        ],
        selectedItem: null
      };

      const result = itemReducer(initial, deleteItemAction);
      expect(result).toEqual(expectedResults);
    });
  });

  describe('SELECT_ITEM', () => {
    it('should select the item', () => {
      const selectItemAction = new fromItemAction.selectItemAction(
        {
          "name": "dfvsd",
          "description": "sdfvds",
          "timestamp": "1494446657125",
          "id": "0.93qv0ticpig"
        }
      );

      const expectedResults = {
        items : [{
          "name": "dfvsd",
          "description": "sdfvds",
          "timestamp": "1494446657125",
          "id": "0.93qv0ticpig"
        }],
        selectedItem: {
          "name": "dfvsd",
          "description": "sdfvds",
          "timestamp": "1494446657125",
          "id": "0.93qv0ticpig"
        }
      };

      const result = itemReducer(fromItem.initialState, selectItemAction);
      expect(result).toEqual(expectedResults);
    })
  });
});