import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

// MODULES
import { AppRoutingModule } from './app-routing.module'
import { PhoneModule } from './phone/phone.module'

// MATERIAL
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MaterialModule} from './material.module'

// COMPONENTS
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PhoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
