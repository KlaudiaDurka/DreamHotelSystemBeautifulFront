import {Component, OnInit} from '@angular/core';
import {Reservation} from "./reservation";
import {ReservationServiceService} from "./reservation-service.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationServiceService) {
  }

  ngOnInit() {
    this.reservationService.findAll().subscribe(date => {
      this.reservations = date;
    })
  }

}
