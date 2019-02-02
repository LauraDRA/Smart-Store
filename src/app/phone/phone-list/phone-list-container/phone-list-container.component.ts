import { Component, OnInit } from '@angular/core'
import { PhoneService } from '../../phone.service'
import { PhoneInterface } from '../../phone.interface'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.scss']
})
export class PhoneListContainerComponent implements OnInit {

  constructor(private _phoneService: PhoneService) { }

  phones: Array<PhoneInterface>

  ngOnInit() {
    this._phoneService.getPhones()
      .subscribe((phones) => this.phones = phones)
    
  }

}
