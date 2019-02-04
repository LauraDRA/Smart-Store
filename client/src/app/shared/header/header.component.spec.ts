import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { HeaderComponent } from './header.component'
import {Store, StoreModule} from "@ngrx/store"
import { PhonesState } from "../../phone/store/reducers/phones-state.interface"
import {Router} from "@angular/router"
import {appReducers} from "../../app.reducers"
import { RouterTestingModule } from '@angular/router/testing'
import { LoadPhonesActionSuccess, LoadPhonesFailAction, LoadPhonesActionInitial } from "../../phone/store/actions/phones.actions"
import { PhoneInterface as Phone } from "../../phone/phone.interface"


describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  let store: Store<PhonesState>
  let router: Router


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot( appReducers )
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    store = TestBed.get(Store)

    spyOn(store, 'dispatch').and.callThrough()

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    component.showItems = true
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render "Smartphone" as a title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('Smartphones')
  })

  it('should display the phones number when LoadPhonesActionInitial is dispatched', () => {
    const items:Array<Phone> = [{
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
      price: 120,
      characteristics: 'string'
    }]
    const action = new LoadPhonesActionInitial(items, items.length)

    store.dispatch(action)

    component.selectedStore$.subscribe(data => {
      expect(data.phones.length).toBe(items.length)
    })
  })

  it('should display the phones number when LoadPhonesActionSuccess is dispatched', () => {
    const items:Array<Phone> = [{
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
      price: 120,
      characteristics: 'string'
    }]
    const action = new LoadPhonesActionSuccess(items, 1)

    store.dispatch(action)

    component.selectedStore$.subscribe(data => {
      expect(data.phones.length).toBe(items.length)
    })
  })

  it('should display 0 phones when LoadPhonesFailAction is dispatched', () => {
    const mockError = {code:404, success: 'false', message: 'phone not found'}

    const action = new LoadPhonesFailAction(mockError)

    store.dispatch(action)

    component.selectedStore$.subscribe(data => {
      expect(data.phones.length).toBe(0)
    })
  })

})
