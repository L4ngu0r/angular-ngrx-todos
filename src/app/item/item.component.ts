import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Item} from "./shared/item.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input('item') set _item(value: Item) {
  if(value){
    this.originalName = value.name;
    value.timestamp = new Date().getTime();
  }
  this.selectedItem = Object.assign({}, value);
}

  originalName: string;
  selectedItem: Item = null;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

}
