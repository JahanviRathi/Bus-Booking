import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { BusDetailsComponent } from './bus-details/bus-details.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PassengerInfoComponent } from './passenger-info/passenger-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bus-list', component: BusListComponent },
  { path: 'bus-details/:id', component: BusDetailsComponent },
  { path: 'book-now', component: PassengerInfoComponent},
  { path: 'confirm', component: ConfirmationComponent},
  { path: 'bookings', component: BookingsComponent},
  { path: '**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
