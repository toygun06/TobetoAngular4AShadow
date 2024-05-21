import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { LoginPageComponent } from './routes/auth/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'auth/login',
    component: LoginPageComponent,

  }
];
