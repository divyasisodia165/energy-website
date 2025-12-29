import { Routes } from '@angular/router';

// Regular non-standalone components
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { FindGymComponent } from './pages/find-gym/find-gym.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RequestInfoComponent } from './pages/request-info/request-info.component';
import { FranchiseSupportComponent } from './pages/franchise-support/franchise-support.component';

// Standalone components (loaded lazily)
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'find-gym', component: FindGymComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'join-now', component: FindGymComponent },
  { path: 'contact', component: ContactComponent },
    {
    path: 'request-info',
    component: RequestInfoComponent
  },
  {
    path: 'franchise-support',
    component: FranchiseSupportComponent
  },

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
  import('./pages/own-a-gym/own-a-gym.component').then(m => m.OwnAGymComponent),

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
  {
  path: 'yard',
  loadComponent: () =>
    import('./pages/yard/yard.component').then(m => m.YardComponent),
}

];
