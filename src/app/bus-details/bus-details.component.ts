import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookTicketsService } from '../book-tickets.service';
import { BusList } from '../models/bus-list';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css'],
})
export class BusDetailsComponent implements OnInit{
  busId: number;
  selectedBus: BusList;
  busDetails: {bus: BusList, doj: Date};
  allBus: BusList[];
  select: boolean = false;
  selectedSeats: number[];
  doj: Date = this.ticketService.searchData.dateOfJourney;
  numberOfSeats: number[] ;

  constructor(private route: ActivatedRoute, private ticketService: BookTicketsService) {}

  ngOnInit(): void {
    this.busId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.allBus = this.ticketService.busList;
    this.selectedSeats = this.ticketService.selectedSeats;
    this.selectedBus = this.allBus.find((bus) => bus.id === this.busId);
    this.ticketService.selectedBus = { bus: this.selectedBus, doj: this.doj};
    this.numberOfSeats = new Array(this.selectedBus.seats);
  }

  onSelect(seatNo: number) {
    let index = this.ticketService.selectedSeats.findIndex((seat) => seat === seatNo);
    if (index != -1) {
      this.ticketService.selectedSeats.splice(index, 1);
    } else {
      this.ticketService.selectedSeats.push(seatNo);
    }
  }

  isSelected(seatNo: number) : boolean{
    let isPresent = this.ticketService.selectedSeats.find((seat) => seat === seatNo);
    if(isPresent)
      return true;
    return false;
  }
}
