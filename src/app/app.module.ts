import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusListComponent } from './bus-list/bus-list.component';
import { BusDetailsComponent } from './bus-details/bus-details.component';
import { PassengerInfoComponent } from './passenger-info/passenger-info.component';
import { BookingsComponent } from './bookings/bookings.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RouterModule } from '@angular/router';
import { BookTicketsService } from './book-tickets.service';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BusListComponent, BusDetailsComponent, PassengerInfoComponent, BookingsComponent, ConfirmationComponent, ErrorPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
