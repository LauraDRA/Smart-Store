import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { PhoneDetailComponent } from './phone-detail.component'
import {HeaderComponent} from "../../shared/header/header.component"
import {RouterTestingModule} from "@angular/router/testing"
import {Store, StoreModule} from "@ngrx/store"
import {appReducers} from "../../app.reducers"
import {MaterialModule} from "../../material.module"
import {ErrorElementComponent} from "../../shared/error-element/error-element.component"
import {PhonesState} from "../store/reducers/phones-state.interface"
import {PhoneInterface as Phone} from "../phone.interface"
import {LoadPhoneAction, LoadPhoneActionSuccess, LoadPhoneFail} from "../store/actions/phone.actions"

describe('PhoneDetailComponent', () => {
  let component: PhoneDetailComponent
  let fixture: ComponentFixture<PhoneDetailComponent>
  let store: Store<PhonesState>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhoneDetailComponent,
        HeaderComponent,
        ErrorElementComponent],
      imports: [
        MaterialModule,
        RouterTestingModule,
        StoreModule.forRoot( appReducers )
      ]
    })
    .compileComponents()
  }));

  beforeEach(() => {
    store = TestBed.get(Store)
    spyOn(store, 'dispatch').and.callThrough()
    fixture = TestBed.createComponent(PhoneDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });

  it('should be loading as true after component dispatch the action', () => {
    const action = new LoadPhoneAction(1)

    store.dispatch(action);

    component.selectedStore$.subscribe(data => {
      expect(data.loading).toBeTruthy()
    });
  });

  it('should load phone details after dispatch success action', () => {
    const mockPhone: Phone = {
      id: 1,
      title: 'string',
      description: 'string',
      color: 'string',
      image: 'string',
      price: 10,
      characteristics: 'string'
    }

    const action = new LoadPhoneActionSuccess(mockPhone)

    store.dispatch(action);

    component.selectedStore$.subscribe(data => {
      expect(data.phone).toEqual(mockPhone)
    });
  });

  it('should not load phone details after dispatch error action and show error', () => {
    const mockError = {code:404, success: 'false', message: 'phone not found'}


    const action = new LoadPhoneFail(mockError)

    store.dispatch(action);

    component.selectedStore$.subscribe(data => {
      expect(data.error.code).toEqual(404)
      expect(data.phone).toBeNull()
    });
  });
});
