export class Room {
  constructor(id: number, standard: string, numberOfPeople: number, roomNumber: number, floor: number, price: number) {
    this.id = id;
    this.standard = standard;
    this.numberOfPeople = numberOfPeople;
    this.roomNumber = roomNumber;
    this.floor = floor;
    this.price = price;
  }
  id: number;
  standard: string;
  numberOfPeople: number;
  roomNumber: number;
  floor: number;
  price: number;


}
