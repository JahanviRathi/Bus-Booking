import { Injectable, OnInit } from '@angular/core';
import { BusLists } from './bus-list-data';
import { BookedTickets } from './models/booked-tickets';
import { BusList } from './models/bus-list';
import { SearchDetails } from './models/search-details';
import { SelectedBusDetails } from './models/selected-bus-details';

@Injectable({
  providedIn: 'root',
})
export class BookTicketsService implements OnInit {
  public selectedBus: SelectedBusDetails;
  public busList: BusList[] = BusLists.buslist;
  public searchData: SearchDetails;
  public bookedTickets: BookedTickets[] = [];
  public selectedSeats: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.bookedTickets =
      JSON.parse(localStorage.getItem('booked-tickets')) || [];
  }

  onBookTickets() {
    localStorage.setItem('booked-tickets', JSON.stringify(this.bookedTickets));
  }
}
