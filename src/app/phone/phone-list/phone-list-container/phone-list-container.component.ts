import { Component, OnInit } from '@angular/core'
import { PhoneService } from '../../phone.service'
import { PhoneInterface as Phone } from '../../phone.interface'
import { Subscription } from 'rxjs'
import { Store } from '@ngrx/store'

import { LoadPhonesAction } from '../../store/phone.actions'
import { PhoneState } from '../../store/phone-state.interface'
import { Response } from '@angular/http';


@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.scss']
})
export class PhoneListContainerComponent implements OnInit {

  phones: Array<Phone>
  loading: boolean
  error: Response

  constructor(private _phoneService: PhoneService, private store: Store<PhoneState>) {
    this.phones = []
    this.loading = false
    this.error = null
  } 

  ngOnInit(): void {
    this.store.select('smartphone')
      .subscribe( state => {
        if(state) {
          this.phones = state.phones
          this.loading = state.loading
          this.error = state.error
        }
        
    });

    const accion = new LoadPhonesAction()
    this.store.dispatch( accion )   
    
  }
}