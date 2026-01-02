// src/app/profile/profile.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

// 🔑 Imports Firebase
import { Auth, User, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ProfilePage implements OnInit {

  // Propriété pour stocker les informations de l'utilisateur
  currentUser: User | null = null;

  constructor(
    private router: Router,
    private auth: Auth // Injection de l'objet Auth
  ) { }

  ngOnInit() {
    // Récupère l'utilisateur actuellement connecté au chargement de la page
    this.currentUser = this.auth.currentUser;
    
    if (!this.currentUser) {
      // Sécurité : si l'utilisateur n'est pas connecté, rediriger vers la connexion
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }
  }

  // Fonction de déconnexion (transférée ici depuis login.page.ts)
  async logout() {
    try {
      await signOut(this.auth); 
      console.log('Déconnexion réussie depuis la page Profil.');
      // Redirection après déconnexion
      this.router.navigateByUrl('/login', { replaceUrl: true }); 
    } catch (e) {
      console.error('Erreur lors de la déconnexion:', e);
      alert('Erreur lors de la déconnexion. Veuillez réessayer.'); 
    }
  }
}