import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterLink 
  ]
})
export class HomePage implements OnInit {

  constructor(private router: Router) { } 
  ngOnInit() {
   
  }

  goToProfilePage() {
    console.log('Navigating to Profile Page...');
    this.router.navigate(['/profile']);
  }

  goToLoginPage() {
    console.log('Navigating to Login Page...');
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