import {Component, Input, OnInit} from '@angular/core';
import {Room} from "./room";
import {RoomServiceService} from "./room-service.service";


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  rooms: Room[] = [];

  constructor(private roomService: RoomServiceService) {
  }

  ngOnInit() {
    this.roomService.findAll().subscribe(data => {
      this.rooms = data;
    });
  }
}
