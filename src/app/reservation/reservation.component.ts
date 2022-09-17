import {Component, OnInit} from '@angular/core';
import {Reservation} from "./reservation";
import {ReservationServiceService} from "./reservation-service.service";
import {Room} from "../room/room";
import {RoomServiceService} from "../room/room-service.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservations: Reservation[] = [];
  rooms: Room[] = [];

  constructor(private reservationService: ReservationServiceService,
              private roomService: RoomServiceService) {
  }

  ngOnInit() {
    this.reservationService.findAll().subscribe(date => {
      this.reservations = date;
    })
    this.roomService.findAll().subscribe(data => {
      this.rooms = data;
    });
  }

}
