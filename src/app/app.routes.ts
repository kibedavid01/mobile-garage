import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { About } from './pages/about/about';
import { Booking } from './pages/booking/booking';

export const routes: Routes = [
  { path: '', component: Home, title: 'Mobile Garage | We come to you' },
  { path: 'services', component: Services, title: 'Services | Mobile Garage' },
  { path: 'about', component: About, title: 'About | Mobile Garage' },
  { path: 'booking', component: Booking, title: 'Book a Mechanic | Mobile Garage' },
  { path: '**', redirectTo: '' },
];