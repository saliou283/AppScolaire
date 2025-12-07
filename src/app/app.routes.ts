import { Routes} from '@angular/router';

export const routes: Routes =  [

   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' 
  },
  {
    path: 'note',
    loadComponent: () => import('./note/note.page').then( m => m.NotePage)
  },
  {
    path: 'emploi',
    loadComponent: () => import('./emploi/emploi.page').then( m => m.EmploiPage)
  },
  {
    path: 'enseignant',
    loadComponent: () => import('./enseignant/enseignant.page').then( m => m.EnseignantPage)
  },
  {
    path: 'deliberation',
    loadComponent: () => import('./deliberation/deliberation.page').then( m => m.DeliberationPage)
  },
  
{
  path: 'home',
  loadComponent: () => import('./home/home.page').then(m => m.HomePage), 
},
  {
    path: 'etudiant', 
    loadComponent: () => import('./etudiants/etudiants.page').then( m => m.EtudiantsPage)
  },
 
  {
    path: 'missing',
    loadComponent: () => import('./missing/missing.page').then( m => m.MissingPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  





];

export class AppRoutingModule {}