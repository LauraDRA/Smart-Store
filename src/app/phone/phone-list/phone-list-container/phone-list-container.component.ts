import { Component, OnInit } from '@angular/core'
import { PhoneService } from '../../phone.service'
import { PhoneInterface as Phone } from '../../phone.interface'
import { Store } from '@ngrx/store'

import { LoadPhonesAction } from '../../store/actions/phones.actions'
import { PhonesState } from '../../store/reducers/phones-state.interface'
import { Response } from '@angular/http'


@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.scss']
})
export class PhoneListContainerComponent implements OnInit {

  phones: Array<Phone>
  loading: boolean
  error: Response
  pageNumber: number
  pageSize: number

  constructor(private _phoneService: PhoneService, 
              private store: Store<PhonesState>) {
    this.phones = []
    this.loading = false
    this.error = null
    this.pageNumber = 1
    this.pageSize = 10
  } 

  ngOnInit(): void {
    this.store.select('smartphones')
      .subscribe( state => {
        if(state) {
          this.phones = state.phones
          this.loading = state.loading
          this.error = state.error
        }
        
    });    

    this.store.dispatch( new LoadPhonesAction() )
  }

  loadMore() {
    const action = new LoadPhonesAction(this.pageNumber++)
    this.store.dispatch( action )
  }
}
