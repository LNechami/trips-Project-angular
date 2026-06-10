// import { Routes } from '@angular/router';
// import { Login } from './login/login';
// import { Register } from './register/register';
// import {Home} from './home/home';
// import { AllTrips } from './home/all-trips/all-trips';
// import { MyTrips } from './home/my-trips/my-trips';

// export const routes: Routes = [
//     { path: '', redirectTo: '/login', pathMatch: 'full' },
//     { path: 'login', component: Login },
//     { path: 'register', component: Register },   
//     { path: 'home',
//      component: Home,
//     children: [
//       { path: '', redirectTo: 'all-trips', pathMatch: 'full' },
//       { path: 'all-trips', component: AllTrips },
//       { path: 'my-trips', component: MyTrips },
//     ]
//   },
//     { path: '**', redirectTo: '/login' },

// ];

import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Home } from './home/home';
import { AllTrips } from './home/all-trips/all-trips';
import { MyTrips } from './home/my-trips/my-trips';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    
    { path: 'login', component: Login },
    { path: 'register', component: Register },   
    
    { 
      path: 'home',
      component: Home,
      children: [
        { path: '', redirectTo: 'all-trips', pathMatch: 'full' }, 
        { path: 'all-trips', component: AllTrips },
        { path: 'my-trips', component: MyTrips }
      ]
    },
    
    { path: '**', redirectTo: 'login' }
];
