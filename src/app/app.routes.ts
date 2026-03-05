import { Routes} from '@angular/router';

export const routes: Routes =  [

   {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full' 
  },
  
  {
    path: 'historiques',
    loadComponent: () => import('./historiques/historiques.page').then( m => m.HistoriquesPage)
  },
  {
    path: 'eno',
    loadComponent: () => import('./eno/eno.page').then( m => m.EnoPage)
  },
  
{
  path: 'home',
  loadComponent: () => import('./home/home.page').then(m => m.HomePage), 
},
  {
    path: 'filiere', 
    loadComponent: () => import('./filiere/filiere.page').then( m => m.FilierePage)
  },
 
  
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  
  
  
  {
    path: 'parc',
    loadComponent: () => import('./parc/parc.page').then( m => m.ParcPage)
  },
  {
    path: 'pedagogique',
    loadComponent: () => import('./pedagogique/pedagogique.page').then( m => m.PedagogiquePage)
  },



  /*{
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },*/

];



