import { NgModule } from '@angular/core'
import { CommonModule} from '@angular/common'

import { ErrorElementComponent } from './error-element/error-element.component'
import { HeaderComponent } from './header/header.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorElementComponent,
    HeaderComponent
  ],
  exports: [
    ErrorElementComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
