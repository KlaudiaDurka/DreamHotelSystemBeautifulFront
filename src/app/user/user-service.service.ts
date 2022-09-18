import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserHotel} from "./userHotel";
import {Observable} from "rxjs";

@Injectable(
  {
  providedIn: 'root'
}
)
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/usersHotel';
  }

  public findAll(): Observable<UserHotel[]> {
    return this.http.get<UserHotel[]>(this.usersUrl);
  }

  public save(user: UserHotel) {
    return this.http.post<UserHotel>(this.usersUrl, user);
  }
}
