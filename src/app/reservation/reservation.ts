import {Room} from "../room/room";
import {UserHotel} from "../user/userHotel";

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
  userHotel: UserHotel;


  constructor(id: number, startVisit: Date, endVisit: Date, numberOfGuests: number, breakfast: boolean, parking: boolean, animal: boolean, spa: boolean, roomId: number, userId: number, room: Room, userHotel: UserHotel) {
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
    this.userHotel = userHotel;
  }
}
