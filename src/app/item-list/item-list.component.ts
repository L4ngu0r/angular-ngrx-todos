import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Item} from "../item/shared/item.model";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input('items') items: Item[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
