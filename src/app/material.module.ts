import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatProgressSpinnerModule } from '@angular/material'

const libraries = [
  MatCardModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: libraries,
  exports: libraries,
})

export class MaterialModule { }
