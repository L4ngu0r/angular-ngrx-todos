/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ItemListComponent} from "./item-list/item-list.component";
import {ItemComponent} from "./item/item.component";
import {reducer} from "./app.reducer";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {StoreModule} from "@ngrx/store";
import {ItemsService} from "./item/shared/item.service";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ItemComponent,
        ItemListComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        StoreModule.provideStore(reducer),
      ],
      providers: [
        ItemsService
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
