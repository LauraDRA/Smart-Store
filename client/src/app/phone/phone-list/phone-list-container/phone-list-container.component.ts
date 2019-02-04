import { Component, OnInit, OnDestroy } from '@angular/core'
import { PhoneInterface as Phone } from '../../phone.interface'
import { Store } from '@ngrx/store'
import { Router, ActivatedRoute } from '@angular/router'
import { LoadPhonesAction } from '../../store/actions/phones.actions'
import { PhonesState } from '../../store/reducers/phones-state.interface'
import {HttpErrorResponse} from "@angular/common/http"
import {Observable, Subscription} from "rxjs"
import {first} from "rxjs/operators"


@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.scss']
})
export class PhoneListContainerComponent implements OnInit, OnDestroy {

  phones: Array<Phone>
  loading: boolean
  error: HttpErrorResponse
  pageNumber: number
  pageSize: number
  selectedStore$: Observable<PhonesState>

  private storeSubscribe: Subscription

  constructor( private router: Router,
               private activatedRouter: ActivatedRoute,
               private store: Store<PhonesState>) {
    this.phones = []
    this.loading = false
    this.error = null
    this.pageNumber = 1
    this.pageSize = 10
    this.selectedStore$ = this.store.select('smartphones')
  } 

  ngOnInit(): void {

    this.activatedRouter.queryParams
      .pipe(first())
      .subscribe(params => {
        this.pageNumber = params['pageNumber'] || this.pageNumber
        this.pageSize = params['pageSize'] || this.pageSize
      });

    this.store.dispatch( new LoadPhonesAction(this.pageNumber, this.pageSize) )

    this.storeSubscribe = this.selectedStore$.subscribe( state => {
        if(state) {
          this.phones = state.phones
          this.loading = state.loading
          this.error = state.error
          this.pageNumber = !state.loading? state.pageNumber: this.pageNumber
          this.pageSize = state.pageSize
          if(this.pageNumber) {
            this.router.navigate(['/smartphones'], {queryParams: {'pageNumber': this.pageNumber}});
          }

        }
        
    });

  }

  ngOnDestroy() {
    this.storeSubscribe.unsubscribe()
  }


  loadMore() {
    const action = new LoadPhonesAction(++this.pageNumber)
    this.store.dispatch( action )
  }
}
