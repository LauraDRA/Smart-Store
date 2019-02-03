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


// NGRX
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { appReducers } from './app.reducers'
import { appEffects } from './app.effects'

// Environment
import { environment } from '../environments/environment'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PhoneModule,
    StoreModule.forRoot( appReducers ),
    EffectsModule.forRoot( appEffects ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
