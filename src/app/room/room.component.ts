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
   //private roomService: RoomServiceService;

  constructor(private roomService: RoomServiceService) {
    //this.rooms = rooms;
    //this.roomService = roomService;
  }

// constructor(private roomService: RoomServiceService) {
//   }



  ngOnInit() {
    this.roomService.findAll().subscribe(data => {
      this.rooms = data;
    });
  }
}
