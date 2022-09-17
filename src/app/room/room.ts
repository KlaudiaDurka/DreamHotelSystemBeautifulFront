export class Room {
  private _id: number;
  private _standard: string;
  private _numberOfPeople: number;
  private _roomNumber: number;
  private _floor: number;
  private _price: number;


  constructor(id: number, standard: string, numberOfPeople: number, roomNumber: number, floor: number, price: number) {
    this._id = id;
    this._standard = standard;
    this._numberOfPeople = numberOfPeople;
    this._roomNumber = roomNumber;
    this._floor = floor;
    this._price = price;
  }


  get id(): number {
    return this._id;
  }

  get standard(): string {
    return this._standard;
  }

  get numberOfPeople(): number {
    return this._numberOfPeople;
  }

  get roomNumber(): number {
    return this._roomNumber;
  }

  get floor(): number {
    return this._floor;
  }

  get price(): number {
    return this._price;
  }
}
