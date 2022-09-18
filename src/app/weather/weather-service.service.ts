import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserHotel} from "../user/userHotel";
import {Weather} from "./weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private weatherUrl: string;

  constructor(private http: HttpClient) {
    this.weatherUrl = 'http://localhost:8080/weatherToday';
  }

  public findWeather(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.weatherUrl);
  }
}
