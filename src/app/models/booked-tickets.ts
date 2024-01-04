import { PassengerDetails } from "./passenger-details";
import { SeatDetails } from "./seat-details";

export interface BookedTickets {
    ticketId: string,
    passengerDetails: PassengerDetails,
    seatDetails: SeatDetails,
    total: number
}
