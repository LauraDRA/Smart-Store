import { Component, OnDestroy, OnInit} from '@angular/core'
import { Store} from '@ngrx/store'
import { ActivatedRoute } from '@angular/router'
import { PhoneState } from '../store/reducers/phone-state.interface'
import { LoadPhoneAction } from '../store/actions/phone.actions'
import { PhoneInterface as Phone } from '../phone.interface'
import {Observable, Subscription} from "rxjs"
import { HttpErrorResponse} from "@angular/common/http"



@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss']
})
export class PhoneDetailComponent implements OnInit, OnDestroy {

  phone: Phone
  loading: boolean
  error: HttpErrorResponse
  panelOpenState:boolean
  selectedStore$: Observable<PhoneState>

  private storeSubscribe: Subscription

  constructor( private router: ActivatedRoute,
               private store: Store<PhoneState>) { 
    this.phone = null
    this.loading = false
    this.error = null
    this.panelOpenState = false
    this.selectedStore$ = this.store.select('smartphone')
  }

  ngOnInit() {
    this.storeSubscribe = this.selectedStore$.subscribe( state => {
        if(state) {
          this.phone = state.phone
          this.loading = state.loading
          this.error = state.error
        }
    });

    this.router.params
      .subscribe(params => {
        const id = params['id']

        this.store.dispatch( new LoadPhoneAction(id) )
      })
  }

  ngOnDestroy() {
    this.storeSubscribe.unsubscribe()
  }
}
