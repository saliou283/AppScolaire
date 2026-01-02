import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular'; 
import { CommonModule } from '@angular/common'; 
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

// 🔑 IMPORTS FIREBASE DIRECTS (pour signIn et signOut) 🔑
import { Auth, signInWithEmailAndPassword, signOut, UserCredential } from '@angular/fire/auth'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule 
  ],
  standalone: true
})
export class LoginPage implements OnInit { 
  
  @ViewChild('formulaireConnexion') loginForm!: NgForm; 

  credentials = {
    email: '',
    password: ''
  };

  // 🔑 INJECTION : Utilisation de l'objet Auth direct pour signIn et signOut
  constructor(
    private router: Router,
    private auth: Auth // <-- INJECTION DIRECTE DE L'OBJET AUTH
  ) { } 

  ngOnInit() {
  }

  // La méthode est ASYNCHRONE pour utiliser await (Connexion)
  async login() { 
    const { email, password } = this.credentials;
    console.log('Tentative de connexion avec :', email);

    try { 
      
      // 🚀 APPEL DIRECT À LA FONCTION FIREBASE POUR LA CONNEXION
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        this.auth, 
        email, 
        password
      ); 
      
      console.log('Connexion réussie. UID:', userCredential.user.uid);
      
      // Redirection après succès
      this.router.navigateByUrl('/home', { replaceUrl: true }); 

    } catch (e: any) { 
      
      console.error('Erreur de connexion:', e.message);
      
      let errorMessage = "Échec de la connexion. Vérifiez vos identifiants.";

      if (e.code === 'auth/wrong-password') {
          errorMessage = "Mot de passe incorrect.";
      } else if (e.code === 'auth/user-not-found') {
          errorMessage = "Utilisateur non trouvé.";
      }
      
      alert(errorMessage); 
    }
  } 

  // La méthode est ASYNCHRONE pour supporter la fonction Firebase (Déconnexion)
  async logout() {
    console.log('Tentative de déconnexion...');
    
    try {
      // 🚀 Appel à la fonction Firebase pour déconnecter l'utilisateur
      await signOut(this.auth); 
      
      console.log('Déconnexion réussie.');
      
      // 💡 Redirection vers la page de connexion
      this.router.navigateByUrl('/login', { replaceUrl: true }); 
      
    } catch (e: any) {
      console.error('Erreur lors de la déconnexion:', e);
      alert('Erreur lors de la déconnexion. Veuillez réessayer.'); 
    }
  }
}