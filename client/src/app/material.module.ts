import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatProgressSpinnerModule, MatExpansionModule, MatListModule } from '@angular/material'

const libraries = [
  MatCardModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatListModule
]

@NgModule({
  imports: libraries,
  exports: libraries,
})

export class MaterialModule { }
