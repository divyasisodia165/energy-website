import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FindGymComponent } from './pages/find-gym/find-gym.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { LoginComponent } from './pages/login/login.component';
import { JoinNowComponent } from './pages/join-now/join-now.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'find-gym', component: FindGymComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'login', component: LoginComponent },
  // Change this route to point FindGymComponent instead of JoinNowComponent
  { path: 'join-now', component: FindGymComponent }  
];