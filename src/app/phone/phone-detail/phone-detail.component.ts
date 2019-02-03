import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { ActivatedRoute } from '@angular/router'
import { PhoneState } from '../store/reducers/phone-state.interface'
import { LoadPhoneAction } from '../store/actions/phone.actions'
import { PhoneInterface as Phone } from '../phone.interface'



@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss']
})
export class PhoneDetailComponent implements OnInit {

  phone: Phone
  loading: boolean
  error: Response

  panelOpenState = false

  constructor( private router: ActivatedRoute,
               private store: Store<PhoneState>) { 
    this.phone = null
    this.loading = false
    this.error = null
  }

  ngOnInit() {
    this.store.select('smartphone')
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

}
