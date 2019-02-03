import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from "@ngrx/store"
import { PhonesState } from "../../phone/store/reducers/phones-state.interface"
import { Router } from '@angular/router'
import { Subscription } from "rxjs"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  showItems: boolean
  items: number

  private storeSubscribe: Subscription

  constructor(private store: Store<PhonesState>,
              private router: Router) {
    this.showItems = this.router.url.includes('smartphones')
  }

  ngOnInit() {
    if(this.showItems) {
      this.storeSubscribe = this.store.select('smartphones')
        .subscribe(state => {
          if (state) this.items = state.phones.length
        });
    }
  }

  ngOnDestroy() {
    if(this.showItems) this.storeSubscribe.unsubscribe()
  }

}
