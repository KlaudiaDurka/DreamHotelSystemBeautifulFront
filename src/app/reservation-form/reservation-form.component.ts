import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from "../reservation/reservation";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationServiceService} from "../reservation/reservation-service.service";
import {RoomComponent} from "../room/room.component";
import {Room} from "../room/room";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservations: Reservation;

  @Input() rooms!: Room;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private reservationService: ReservationServiceService) {
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

  ngOnInit(): void {
  }

}
