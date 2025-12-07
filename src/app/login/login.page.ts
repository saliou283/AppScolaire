// src/app/login/login.page.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
// Assurez-vous d'avoir un AuthService pour gérer la logique de connexion
import { AuthService } from '../services/auth.service'; 
// Importez FormsModule si vous utilisez l'approche [(ngModel)] dans votre module Angular
// Si vous utilisez des composants standalone, vous devrez importer FormsModule dans le composant lui-même

@Component({
  selector: 'app-login', 
  templateUrl: './login.page.html', 
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit { // <-- L'exportation nommée est ici !

  // Propriété qui se lie aux champs du formulaire via [(ngModel)] dans le HTML
  credentials = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    // Logique d'initialisation (par exemple, vérifier si l'utilisateur est déjà connecté)
  }

  /**
   * Méthode appelée lors de la soumission du formulaire (via ngSubmit dans le HTML).
   */
  async login() {
    if (!this.credentials.email || !this.credentials.password) {
      this.showAlert('Erreur', 'Veuillez saisir votre email et votre mot de passe.');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Vérification des identifiants...',
      spinner: 'crescent',
    });
    await loading.present();

    try {
      // 1. Appeler la méthode de connexion du service
      const success = await this.authService.login(this.credentials.email, this.credentials.password);
      
      await loading.dismiss();

      if (success) {
        // 2. Connexion réussie : rediriger vers la page d'accueil (home)
        // Utilisez navigateRoot pour effacer l'historique et empêcher le retour à la page de connexion
        this.navCtrl.navigateRoot('/home'); 
      } else {
        // 3. Échec de la connexion (mauvais identifiants)
        this.showAlert('Échec de la connexion', 'Identifiant ou mot de passe incorrect. Veuillez réessayer.');
      }
    } catch (error) {
      await loading.dismiss();
      // 4. Gérer les erreurs inattendues (réseau, serveur, etc.)
      console.error('Erreur lors de la tentative de connexion:', error);
      this.showAlert('Erreur Serveur', 'Impossible de contacter le serveur. Veuillez vérifier votre connexion.');
    }
  }

  /**
   * Navigue vers la page d'inscription.
   */
  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  /**
   * Affiche une alerte Ionic pour informer l'utilisateur.
   */
  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}