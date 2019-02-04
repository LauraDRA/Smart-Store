import { RouterTestingModule } from '@angular/router/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { PhoneListContainerComponent } from './phone-list-container.component'
import {HeaderComponent} from "../../../shared/header/header.component"
import {ErrorElementComponent} from "../../../shared/error-element/error-element.component"
import {MaterialModule} from "../../../material.module"
import {Store, StoreModule} from "@ngrx/store"
import {appReducers} from "../../../app.reducers"
import {PhonesState} from "../../store/reducers/phones-state.interface"
import {PhoneCardComponent} from "../phone-card/phone-card.component"
import {LoadPhonesAction, LoadPhonesActionSuccess} from "../../store/actions/phones.actions"
import {PhoneInterface as Phone} from "../../phone.interface"

describe('PhoneListContainerComponent', () => {
  let component: PhoneListContainerComponent
  let fixture: ComponentFixture<PhoneListContainerComponent>
  let store: Store<PhonesState>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhoneListContainerComponent,
        HeaderComponent,
        ErrorElementComponent,
        PhoneCardComponent],
      imports: [
        RouterTestingModule,
        MaterialModule,
        StoreModule.forRoot( appReducers )
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store)
    spyOn(store, 'dispatch').and.callThrough()
    fixture = TestBed.createComponent(PhoneListContainerComponent)
    component = fixture.componentInstance
    spyOn(component['router'], 'navigate').and.returnValue(true)
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change "loading" to true after component dispatch the action', () => {
    const action = new LoadPhonesAction(1)

    store.dispatch(action);

    component.selectedStore$.subscribe(data => {
      expect(data.loading).toBeTruthy()
    });
  });

  it('should navigate to first page in /smartphones', () => {
    const action = new LoadPhonesAction(1)

    store.dispatch(action);

    component.selectedStore$.subscribe(data => {
      expect(component['router'].navigate).toHaveBeenCalledWith(['/smartphones'], {queryParams:{pageNumber: 1}});
    });
  });

  it('should load phone details after dispatch success action', () => {
    const mockPhones: Array<Phone> = [{
      id: 1,
      title: 'string',
      description: 'string',
      color: 'string',
      image: 'string',
      price: 10,
      characteristics: 'string'
    }, {
      id: 2,
      title: 'string',
      description: 'string',
      color: 'string',
      image: 'string',
      price: 20,
      characteristics: 'string'
    }]

    const action = new LoadPhonesActionSuccess(mockPhones, 2, 10)

    store.dispatch(action)

    component.selectedStore$.subscribe(data => {
      expect(data.phones).toEqual(mockPhones)
      expect(data.pageNumber).toEqual(2)
      expect(data.pageSize).toEqual(10)
    })
  })


  it('should dispath action when loadMore is called', () => {

    component.loadMore()

    component.selectedStore$.subscribe(data => {
      expect(data.loading).toBeTruthy()
    })
  });

});
