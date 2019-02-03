import {Component, OnDestroy, OnInit} from '@angular/core'
import { Store } from '@ngrx/store'
import { ActivatedRoute } from '@angular/router'
import { PhoneState } from '../store/reducers/phone-state.interface'
import { LoadPhoneAction } from '../store/actions/phone.actions'
import { PhoneInterface as Phone } from '../phone.interface'
import {Subscription} from "rxjs"



@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss']
})
export class PhoneDetailComponent implements OnInit, OnDestroy {

  phone: Phone
  loading: boolean
  error: Response
  panelOpenState:boolean

  private storeSubscribe: Subscription

  constructor( private router: ActivatedRoute,
               private store: Store<PhoneState>) { 
    this.phone = null
    this.loading = false
    this.error = null
    this.panelOpenState = false
  }

  ngOnInit() {
    this.storeSubscribe = this.store.select('smartphone')
      .subscribe( state => {
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
