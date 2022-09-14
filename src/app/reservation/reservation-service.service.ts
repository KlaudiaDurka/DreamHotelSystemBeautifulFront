import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../room/room";
import {Reservation} from "./reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {

  private reservationsUrl: string;

  constructor(private http: HttpClient) {
    this.reservationsUrl = 'http://localhost:8080/reservations';
  }

  public findAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.reservationsUrl);
  }

  public save(reservation: Reservation) {
    return this.http.post<Reservation>(this.reservationsUrl, reservation);
  }
}
