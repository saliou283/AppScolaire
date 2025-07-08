import { Routes} from '@angular/router';

export const routes: Routes = [

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
    path: 'absence',
    loadComponent: () => import('./absence/absence.page').then( m => m.AbsencePage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'etudiant',
    loadComponent: () => import('./etudiants/etudiants.page').then( m => m.EtudiantsPage)
  },
  
];

export class AppRoutingModule {}