import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// COMPONENTS
import { PhoneListContainerComponent } from './phone/phone-list/phone-list-container/phone-list-container.component'
import { PhoneDetailComponent } from './phone/phone-detail/phone-detail.component'

const routes: Routes = [
  { path: 'smartphones', component: PhoneListContainerComponent },
  { path: 'smartphone/:id', component: PhoneDetailComponent },
  { path: '**', redirectTo: 'smartphones' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
