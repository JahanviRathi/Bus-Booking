import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookTicketsService } from '../book-tickets.service';
import { BusList } from '../models/bus-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchForm: UntypedFormGroup;
  minDate: string;
  busList: BusList[];
  sourceList: string[];
  destList: string[];
  isHover: boolean = false;

  constructor(
    private router: Router,
    private ticketService: BookTicketsService
  ) {}

  ngOnInit(): void {
    this.busList = this.ticketService.busList;
    this.minDate = new Date().toISOString().slice(0, 10);
    this.sourceList = [...new Set(this.busList.map((bus) => bus.source))];
    this.destList = [...new Set(this.busList.map((bus) => bus.destination))];
    this.searchForm = new UntypedFormGroup({
      source: new UntypedFormControl(null, Validators.required),
      destination: new UntypedFormControl(null, Validators.required),
      dateOfJourney: new UntypedFormControl(null, Validators.required),
    });
  }

  onSearch() {
    this.ticketService.searchData = this.searchForm.value;
    this.router.navigate(['/bus-list']);
  }

  onSelectSource(event) {
    this.destList = [...new Set(this.busList.map((bus) => bus.destination))];
    let index = this.destList.findIndex((dest) => dest === event.target.value);
    if (index != -1) this.destList.splice(index, 1);
    // var dest = [];
    // this.busList.map(bus => {
    //   if(bus.source === event.target.value)
    //     dest.push(bus.destination);
    // })
    // this.destList = [...new Set(dest)];
  }

  onSelectDest(event) {
    this.sourceList = [...new Set(this.busList.map((bus) => bus.source))];
    let index = this.sourceList.findIndex(
      (source) => source === event.target.value
    );
    if (index != -1) this.sourceList.splice(index, 1);
    // var source = [];
    // this.busList.map(bus => {
    //   if(bus.destination === event.target.value)
    //     source.push(bus.source);
    // })
    // this.sourceList = [...new Set(source)];
  }
}
