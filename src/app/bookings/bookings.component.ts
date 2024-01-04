import { Component, OnInit } from '@angular/core';
import { BookTicketsService } from '../book-tickets.service';
import { BookedTickets } from '../models/booked-tickets';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  bookedTickets: BookedTickets[];
  
  constructor(private ticketService: BookTicketsService) {}

  ngOnInit(): void {
    this.bookedTickets = this.ticketService.bookedTickets;
  }
}
