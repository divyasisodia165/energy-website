import { Routes } from '@angular/router';

// Regular non-standalone components
import { HomeComponent } from './pages/home/home.component';
import { FindGymComponent } from './pages/find-gym/find-gym.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { LoginComponent } from './pages/login/login.component';

// Standalone components (loaded lazily)
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'find-gym', component: FindGymComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'join-now', component: FindGymComponent },

  // Standalone component routes using loadComponent
  {
    path: 'refer',
    loadComponent: () =>
      import('./pages/refer-friend/refer-friend.component').then(
        (m) => m.ReferFriend
      ),
  },
  {
    path: 'reviews',
    loadComponent: () =>
      import('./pages/reviews/reviews.component').then((m) => m.Reviews),
  },
  {
    path: 'free-trial',
    loadComponent: () =>
      import('./pages/free-trial/free-trial.component').then(
        (m) => m.FreeTrial
      ),
  },
  {
    path: 'own-a-gym',
    loadComponent: () =>
      import('./pages/own-a-gym/own-a-gym.component').then((m) => m.OwnAGym),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/energie-blog/energie-blog.component').then(
        (m) => m.EnergieBlog
      ),
  },
  {
    path: 'online',
    loadComponent: () =>
      import('./pages/energie-online/energie-online.component').then(
        (m) => m.EnergieOnline
      ),
  },
];
