import { NgModule } from '@angular/core'
import { CommonModule} from '@angular/common'
import { HttpClientModule} from '@angular/common/http'

// MATERIAL
import {MaterialModule} from '../material.module'

// COMPONENTS
import { PhoneListContainerComponent } from './phone-list/phone-list-container/phone-list-container.component'
import { PhoneCardComponent } from './phone-list/phone-card/phone-card.component'
import { PhoneLayoutComponent } from './phone-layout.component'

// SERVICES
import { PhoneService } from './phone.service'

// CUSTOM MODULES
import { SharedModule } from '../shared/shared.module'



@NgModule({
  declarations: [
    PhoneListContainerComponent,
    PhoneCardComponent,
    PhoneLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    PhoneListContainerComponent
  ],
  providers: [PhoneService]
})
export class PhoneModule { }
