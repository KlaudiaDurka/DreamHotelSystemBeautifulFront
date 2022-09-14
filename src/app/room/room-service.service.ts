import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "./room";

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class RoomServiceService {
  private roomsUrl: string;

  constructor(private http: HttpClient) {
    this.roomsUrl = 'http://localhost:8080/rooms';
  }

  public findAll(): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl);
  }

  public save(room: Room) {
    return this.http.post<Room>(this.roomsUrl, room);
  }
}
