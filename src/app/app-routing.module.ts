import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// COMPONENTS
import { PhoneLayoutComponent } from './phone/phone-layout.component'

const routes: Routes = [
  { path: 'smartphones', component: PhoneLayoutComponent },
  { path: '**', redirectTo: 'smartphones' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
