import { Component, OnInit } from '@angular/core';
import { BookTicketsService } from '../book-tickets.service';
import { BookedTickets } from '../models/booked-tickets';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  length: number;
  ticket: BookedTickets;

  constructor(private ticketService: BookTicketsService) { }

  ngOnInit(): void {
    this.length = this.ticketService.bookedTickets.length;
    this.ticket = this.ticketService.bookedTickets[this.length - 1];
    console.log(this.ticket);
    
  }

}
