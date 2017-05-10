import {Component, OnInit} from '@angular/core';
import {Item} from "./item/shared/item.model";
import {ItemsService} from "./item/shared/item.service";
import {Store} from "@ngrx/store";
import {AppStore} from "./app.store";
import * as fromActionItem from './item/shared/item.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  items: Array<Item>;
  selectedItem: Item;

  constructor(private itemsService: ItemsService, private store: Store<AppStore>) {

  }

  ngOnInit() {
    this.itemsService.loadItems().subscribe(
      res => {
        this.store.dispatch(new fromActionItem.addItemsAction(res));
      }
    );

    this.store.select('items').subscribe(
      (its:any) => {
        this.items = its && its.items ? its.items : [];
        this.selectedItem = its && its.selectedItem ? its.selectedItem : null;
      }
    );
  }

  resetItem() {
    let emptyItem: Item = {id: null, name: '', description: '', timestamp: null};
    this.store.dispatch(new fromActionItem.selectItemAction(emptyItem));
  }

  selectItem(item: Item) {
    this.store.dispatch(new fromActionItem.selectItemAction(item));
  }

  saveItem(item: Item) {
    this.itemsService.saveItem(item);
    this.resetItem();
  }

  deleteItem(item: Item) {
    this.itemsService.deleteItem(item).subscribe(
      res => {
        this.store.dispatch(new fromActionItem.deleteItemAction(item));
        this.resetItem();
      }
    );
  }
}
