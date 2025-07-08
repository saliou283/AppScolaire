import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router'; // Import Router et RouterLink pour la navigation

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true, // Important pour les composants autonomes dans les versions récentes d'Ionic/Angular
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterLink // N'oubliez pas d'importer RouterLink si vous l'utilisez dans le template
  ]
})
export class HomePage implements OnInit {

  constructor(private router: Router) { } // Injecte le service Router pour la navigation programmatique

  ngOnInit() {
    // Logique d'initialisation du composant, si nécessaire
  }

  // Méthodes de navigation
  // Ces méthodes sont déclenchées par les événements (click) sur les ion-card ou les ion-button

  goToProfilePage() {
    console.log('Navigating to Profile Page...');
    // Remplacez '/profile' par la route réelle de votre page de profil
    this.router.navigate(['/profile']);
  }

  goToLoginPage() {
    console.log('Navigating to Login Page...');
    // Remplacez '/login' par la route réelle de votre page de connexion
    this.router.navigate(['/login']);
  }

  goToEtudiantPage() {
    console.log('Navigating to Etudiant Page...');
    this.router.navigate(['/etudiant']);
  }

  goToEnseignantPage() {
    console.log('Navigating to Enseignant Page...');
    this.router.navigate(['/enseignant']);
  }

  goToNotePage() {
    console.log('Navigating to Note Page...');
    this.router.navigate(['/note']);
  }

  goToAbsencePage() {
    console.log('Navigating to Absence Page...');
    this.router.navigate(['/absence']);
  }

  goToEmploiPage() {
    console.log('Navigating to Emploi Page...');
    this.router.navigate(['/emploi']);
  }

  goToDeliberationPage() {
    console.log('Navigating to Deliberation Page...');
    this.router.navigate(['/deliberation']);
  }
}