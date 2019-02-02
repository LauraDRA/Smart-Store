import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'

const libraries = [
  MatCardModule
]

@NgModule({
  imports: libraries,
  exports: libraries,
})

export class MaterialModule { }
