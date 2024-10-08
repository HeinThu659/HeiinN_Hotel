import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsComponent } from './rooms/rooms.component';
import { DiningComponent } from './dining/dining.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './auth.guard';
import { alreadyLoggedInGuard } from './already-logged-in.guard';
import { AllUsersComponent } from './manager/all-users/all-users.component';
import { RoomDetailsComponent } from './rooms/room-details/room-details.component';
import { PaymentComponent } from './rooms/payment/payment.component';
import { BookingsComponent } from './profile/bookings/bookings.component';
import { AllBookingsComponent } from './manager/all-bookings/all-bookings.component';
import { UpdateBookingComponent } from './manager/update-booking/update-booking.component';
import { UpdateRoomComponent } from './manager/update-room/update-room.component';
import { AllRoomsComponent } from './manager/all-rooms/all-rooms.component';
import { CreateRoomComponent } from './manager/create-room/create-room.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'rooms',
    component: RoomsComponent,
  },
  {
    path: 'dining',
    component: DiningComponent,
  },
  {
    path: 'facilities',
    component: FacilitiesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [alreadyLoggedInGuard], // Redirect to profile if already logged in
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [alreadyLoggedInGuard], // Redirect if already logged in
  },
  {
    path: 'all-users',
    component: AllUsersComponent,
    canActivate: [authGuard],
    data: { role: [1] }, // Manager role required
  },
  {
    path: 'all-bookings',
    component: AllBookingsComponent,
    canActivate: [authGuard],
    data: { role: [1, 2] }, // Manager & Reception roles required
  },
  {
    path: 'all-rooms',
    component: AllRoomsComponent,
    canActivate: [authGuard],
    data: { role: [1, 2] },
  },
  {
    path: 'library',
    component: LibraryComponent,
    
  },
  {
    path: 'update-booking/:bookingId',
    component: UpdateBookingComponent,
    canActivate: [authGuard],
    data: { role: [1, 2] },
  },
  {
    path: 'update-room/:roomId',
    component: UpdateRoomComponent,
    canActivate: [authGuard],
    data: { role: [1, 2] },
  },
  {
    path: 'create-room',
    component: CreateRoomComponent,
    canActivate: [authGuard],
    data: { role: [1, 2] },
  },
  {
    path: 'not-found',
    component: NotfoundComponent,
  },
  {
    path: 'room-details/:roomId',
    component: RoomDetailsComponent,
  },
  {
    path: 'payment/:roomId',
    component: PaymentComponent,
  },
  {
    path: 'mybookings',
    component: BookingsComponent,
    canActivate: [authGuard],
    data: { role: 0 },
  },
  {
    path: '**', //Wildcard
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
