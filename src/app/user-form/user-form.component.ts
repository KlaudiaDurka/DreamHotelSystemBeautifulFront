import { Component, OnInit } from '@angular/core';
import {UserHotel} from "../user/userHotel";
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceService} from "../user/user-service.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements  OnInit{

  usersHotel: UserHotel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService) {
    // @ts-ignore
    this.usersHotel = new UserHotel();
  }

  onSubmit() {
    this.userService.save(this.usersHotel).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/usersHotel']);
  }

  ngOnInit(): void {
  }

}
