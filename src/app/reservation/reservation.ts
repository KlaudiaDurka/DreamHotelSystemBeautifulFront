import {Room} from "../room/room";

export class Reservation {

  id: number;
  startVisit: Date;
  endVisit: Date;
  numberOfGuests: number;
  breakfast: boolean;
  parking: boolean;
  animal: boolean;
  spa: boolean;
  roomId: number;
  userId: number;
  room: Room;


  constructor(id: number, startVisit: Date, endVisit: Date, numberOfGuests: number, breakfast: boolean, parking: boolean, animal: boolean, spa: boolean, roomId: number, userId: number, room: Room) {
    this.id = id;
    this.startVisit = startVisit;
    this.endVisit = endVisit;
    this.numberOfGuests = numberOfGuests;
    this.breakfast = breakfast;
    this.parking = parking;
    this.animal = animal;
    this.spa = spa;
    this.roomId = roomId;
    this.userId = userId;
    this.room = room;
  }
}
