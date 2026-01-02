import { Routes} from '@angular/router';

export const routes: Routes =  [

   {
    path: '',
    redirectTo: 'login',
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
    loadComponent: () => import('./etudiants/etudiants.page').then( m => m.EtudiantPage)
  },
 
  {
    path: 'missing',
    loadComponent: () => import('./missing/missing.page').then( m => m.MissingPage)
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
    path: 'bulletin/:etudiantId',
    loadComponent: () => import('./bulletin/bulletin.page').then( m => m.BulletinPage)
  },
  {
    path: 'saisie-notes',
    loadComponent: () => import('./saisie-notes/saisie-notes.page').then( m => m.SaisieNotesPage)
  },
  /*{
    path: 'enseignant-layout',
    loadComponent: () => import('./enseignant-layout/enseignant-layout.page').then( m => m.EnseignantLayoutPage)
  },*/
  {
    path: 'administration-layout',
    loadComponent: () => import('./administration-layout/administration-layout.page').then( m => m.AdministrationLayoutPage)
  },
  {
    path: 'messagerie',
    loadComponent: () => import('./messagerie/messagerie.page').then( m => m.MessageriePage)
  },


  /*{
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
*/
];

export class AppRoutingModule {}





