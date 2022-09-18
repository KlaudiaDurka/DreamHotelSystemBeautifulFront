import {Component, OnInit} from '@angular/core';
import {Reservation} from "./reservation";
import {ReservationServiceService} from "./reservation-service.service";
import {Room} from "../room/room";
import {RoomServiceService} from "../room/room-service.service";
import {UserHotel} from "../user/userHotel";
import {UserServiceService} from "../user/user-service.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservations: Reservation[] = [];
  rooms: Room[] = [];
  usersHotel: UserHotel[] = [];

  constructor(private reservationService: ReservationServiceService,
              private roomService: RoomServiceService,
              private userService: UserServiceService) {
  }

  ngOnInit() {
    this.reservationService.findAll().subscribe(date => {
      this.reservations = date;
    })
    this.roomService.findAll().subscribe(data => {
      this.rooms = data;
    })
    this.userService.findAll().subscribe(data => {
      this.usersHotel = data;
    });
  }

}
