import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from "@ngrx/store"
import { PhonesState } from "../../phone/store/reducers/phones-state.interface"
import { Router } from '@angular/router'
import {Observable, Subscription} from "rxjs"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  showItems: boolean
  items: number
  selectedStore$: Observable<PhonesState>

  private storeSubscribe: Subscription

  constructor(private store: Store<PhonesState>,
              private router: Router) {
    this.showItems = this.router.url.includes('smartphones')
    this.selectedStore$ = this.store.select('smartphones')
  }

  ngOnInit() {
    if(this.showItems) {
      this.storeSubscribe = this.selectedStore$.subscribe(state => {
          if (state) this.items = state.phones.length
        });
    }
  }

  ngOnDestroy() {
    if(this.showItems) this.storeSubscribe.unsubscribe()
  }

}
