import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-phone-card',
  templateUrl: './phone-card.component.html',
  styleUrls: ['./phone-card.component.scss']
})
export class PhoneCardComponent {

  @Input ('phone') phone

  constructor() { }

}
