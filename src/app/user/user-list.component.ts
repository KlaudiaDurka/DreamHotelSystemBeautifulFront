import { Component, OnInit } from '@angular/core';
import {UserHotel} from "./userHotel";
import {UserServiceService} from "./user-service.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public usersHotel: UserHotel[] = [];

  constructor(private userService: UserServiceService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.usersHotel = data;
    });
  }

}
