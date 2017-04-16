import {ItemsService} from "./item.service";
import {inject, TestBed} from "@angular/core/testing";
import {Http, HttpModule} from "@angular/http";
import {Store, StoreModule} from "@ngrx/store";
import {reducer} from "../../app.reducer";
import {AppStore} from "../../app.store";

describe('Service : Item', () => {
  let service: ItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpModule,
          StoreModule.provideStore(reducer),
        ]
      }
    );
  });

  beforeEach(inject([Store, Http], (store: Store<AppStore>, http: Http) => {
    service = new ItemsService(http, store);
  }));

  it('should have an ItemsService', () => {
    expect(service).toBeTruthy();
  });
});