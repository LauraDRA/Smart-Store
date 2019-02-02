import { NgModule } from '@angular/core'
import { CommonModule} from '@angular/common'

// MATERIAL
import {MaterialModule} from '../material.module'

// COMPONENTS
import { PhoneListContainerComponent } from './phone-list/phone-list-container/phone-list-container.component'
import { PhoneCardComponent } from './phone-list/phone-card/phone-card.component'

// SERVICES
import { PhoneService } from './phone.service'


@NgModule({
  declarations: [
    PhoneListContainerComponent,
    PhoneCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PhoneListContainerComponent
  ],
  providers: [PhoneService]
})
export class PhoneModule { }
