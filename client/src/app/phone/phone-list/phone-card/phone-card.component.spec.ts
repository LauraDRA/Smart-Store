import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PhoneCardComponent } from './phone-card.component'
import {RouterTestingModule} from "@angular/router/testing"
import {MaterialModule} from "../../../material.module"

describe('PhoneCardComponent', () => {
  let component: PhoneCardComponent;
  let fixture: ComponentFixture<PhoneCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule
      ],
      declarations: [ PhoneCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneCardComponent);
    component = fixture.componentInstance;
    component.phone = {
      id: 1,
      title: 'string',
      description: 'string',
      color: 'string',
      image: 'string',
      price: 10,
      characteristics: 'string'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
