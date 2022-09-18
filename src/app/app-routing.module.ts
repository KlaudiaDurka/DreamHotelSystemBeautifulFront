import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoomComponent} from "./room/room.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {ReservationFormComponent} from "./reservation-form/reservation-form.component";
import {UserListComponent} from "./user/user-list.component";

const routes: Routes = [
  {path: 'room', component: RoomComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'reservation-form', component: ReservationFormComponent},
  {path: 'usersHotel', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
