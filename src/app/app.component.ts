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
    console.log('ngOnIinit');
    this.itemsService.loadItems().subscribe(
      res => {
        this.store.dispatch(new fromActionItem.addItemsAction(res));
      }
    );

    this.store.select('items').subscribe(
      (its:any) => {
        console.log('SELECT ITEMS');
        console.log(its);
        this.items = its.items ? its.items : [];
        this.selectedItem = its.selectedItem ? its.selectedItem : null;
      }
    );
  }

  resetItem(item: Item) {
    let emptyItem: Item = {id: null, name: '', description: '', timestamp: null};
    this.store.dispatch(new fromActionItem.selectItemAction(emptyItem));
  }

  selectItem(item: Item) {
    this.store.dispatch(new fromActionItem.selectItemAction(item));
  }

  saveItem(item: Item) {
    this.itemsService.saveItem(item);
    this.resetItem(null);
  }

  deleteItem(item: Item) {
    this.itemsService.deleteItem(item).subscribe(
      res => {
        console.log('DELETE ITEM');
        console.log(res);
        this.store.dispatch(new fromActionItem.deleteItemAction(item));
        this.resetItem(null);
      }
    );
  }
}
