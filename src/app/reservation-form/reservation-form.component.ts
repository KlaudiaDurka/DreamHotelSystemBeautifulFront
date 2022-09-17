import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from "../reservation/reservation";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationServiceService} from "../reservation/reservation-service.service";
import {RoomComponent} from "../room/room.component";
import {Room} from "../room/room";
import {RoomServiceService} from "../room/room-service.service";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservations: Reservation;
  rooms: Room[] = [];

  //@Input() rooms!: Room;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private reservationService: ReservationServiceService,
              private roomService: RoomServiceService) {
    // @ts-ignore
    this.reservations = new Reservation();
  }

  onSubmit() {
    this.reservationService.save(this.reservations)
      .subscribe(result => this.gotoReservationList());

  }

  gotoReservationList(){
    this.router.navigate(['/reservations'])
  }

  ngOnInit() {
    this.roomService.findAll().subscribe(data => {
      this.rooms = data;
    });
  }

}
