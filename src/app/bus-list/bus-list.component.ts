import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookTicketsService } from '../book-tickets.service';
import { BusList } from '../models/bus-list';
import { SearchDetails } from '../models/search-details';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css'],
})
export class BusListComponent implements OnInit {

  busList: BusList[];
  searchInput: SearchDetails;
  filteredBusList: BusList[];

  constructor(private router: Router, private ticketService: BookTicketsService) {}

  ngOnInit(): void {
    this.busList = this.ticketService.busList;
    this.searchInput = this.ticketService.searchData;
    this.filteredBusList = this.searchInput ? this.busList.filter(
      (bus) =>
        bus.source === this.searchInput.source &&
        bus.destination === this.searchInput.destination
    ) : this.busList;    
  }

  viewSeat(id: number){
    this.router.navigate(['bus-details',id]);
  }
}
