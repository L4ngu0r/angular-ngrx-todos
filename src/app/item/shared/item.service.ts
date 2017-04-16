import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Item} from "./item.model";
import {Http, Headers} from "@angular/http";
import {Store} from "@ngrx/store";
import {AppStore} from "../../app.store";
import * as fromActionItem from './item.action';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {environment} from "../../../environments/environment";

@Injectable()
export class ItemsService {
  BASE_URL = `${environment.API_URL}/todo`;
  HEADER = {headers: new Headers({'Content-Type': 'application/json'})};

  constructor(private http: Http, private store: Store<AppStore>) {}

  loadItems() {
    return this.http.get(this.BASE_URL)
      .map(res => {
        return res.json();
      })
      .catch(error => Observable.throw(error));
  }

  saveItem(item: Item) {
    if(!item.timestamp){
      item.timestamp = new Date().getTime();
    }

    if(typeof item.id === 'number' || (item.id !== null && item.id !== undefined)) {
      this.updateItem(item).subscribe(
        res => this.store.dispatch(new fromActionItem.updateItemAction(res))
      );
    }else{
      item.id = (Math.random() * 10).toString(32);
      this.store.select('items').take(1).subscribe(
        (state:any) => {
          console.log('select items');
          console.log(state);
        }
      );
      this.createItem(item).subscribe(
        res => this.store.dispatch(new fromActionItem.createItemAction(item))
      );
    }
  }

  createItem(item: Item) {
    return this.http.post(`${this.BASE_URL}/add`, JSON.stringify(item), this.HEADER)
      .map(res => {
        return res.json()
      })
      .catch(error => Observable.throw(error));
  }

  updateItem(item: Item) {
    return this.http.put(`${this.BASE_URL}/${item.name}`, JSON.stringify(item), this.HEADER)
      .map(res => {
        return res.json();
      })
      .catch(error => Observable.throw(error));
  }

  deleteItem(item: Item) {
    return this.http.delete(`${this.BASE_URL}/${item.name}`, this.HEADER)
      .map(res => {
        return res.json();
      })
      .catch(error => Observable.throw(error));
  }
}
