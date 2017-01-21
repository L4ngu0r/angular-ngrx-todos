import * as fromItem from './item/shared/item.reducer';

export interface AppStore {
  item: fromItem.ItemState
}