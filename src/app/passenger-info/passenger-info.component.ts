import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookTicketsService } from '../book-tickets.service';
import { BookedTickets } from '../models/booked-tickets';
import { SeatDetails } from '../models/seat-details';
import { SelectedBusDetails } from '../models/selected-bus-details';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.css'],
})
export class PassengerInfoComponent implements OnInit {
  passengerForm: UntypedFormGroup;
  selectedBus: SelectedBusDetails;
  selectedSeats: number[];
  bookedTickets: BookedTickets;
  seatDetails: SeatDetails;
  ticketId: string;

  constructor(
    private ticketService: BookTicketsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.passengerForm = new UntypedFormGroup({
      name: new UntypedFormControl(null, Validators.required),
      mobile: new UntypedFormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      email: new UntypedFormControl(null, Validators.email),
    });
    this.selectedBus = this.ticketService.selectedBus;
    this.selectedSeats = this.ticketService.selectedSeats;
    this.ticketId = uuidv4();
  }

  onSubmit() {
    this.seatDetails = { seatNo: this.selectedSeats, bus: this.selectedBus };
    this.bookedTickets = {
      ticketId: this.ticketId,
      passengerDetails: this.passengerForm.value,
      seatDetails: this.seatDetails,
      total: this.selectedSeats.length * this.selectedBus.bus.fare,
    };
    this.ticketService.bookedTickets.push(this.bookedTickets);
    this.ticketService.selectedSeats = [];
    this.ticketService.onBookTickets();
    this.router.navigate(['/confirm']);
  }
}
