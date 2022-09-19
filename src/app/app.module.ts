import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import {RoomServiceService} from "./room/room-service.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { UserListComponent } from './user/user-list.component';
import {UserServiceService} from "./user/user-service.service";
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    ReservationComponent,
    ReservationFormComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RoomServiceService,
              UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
