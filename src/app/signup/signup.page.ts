import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular'; 
import { CommonModule } from '@angular/common'; 
import { Auth, createUserWithEmailAndPassword, UserCredential } from '@angular/fire/auth'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  
  imports: [CommonModule, FormsModule, IonicModule],
  standalone: true
})
export class SignupPage implements OnInit { 
  
  @ViewChild('formulaireInscription') signupForm!: NgForm; 

  credentials = {
    email: '',
    password: ''
  };

  // 🔑 Injection du Router et de l'objet AUTH de Firebase
  constructor(
    private router: Router,
    private auth: Auth 
  ) { } 

  ngOnInit() {
  }

  // Méthode ASYNCHRONE pour l'inscription
  async signup() { 
    const { email, password } = this.credentials;
    console.log('Tentative d\'inscription avec :', email);

    try { 
      
      // 🚀 APPEL À LA FONCTION FIREBASE POUR L'INSCRIPTION 🚀
      const userCredential: UserCredential = await createUserWithEmailAndPassword(
        this.auth, 
        email, 
        password
      ); 
      
      console.log('Inscription réussie. UID:', userCredential.user.uid);
      
      // Après inscription, rediriger vers la page d'accueil (ou une page de confirmation)
      this.router.navigateByUrl('/home', { replaceUrl: true }); 

    } catch (e: any) { 
      
      console.error('Erreur d\'inscription:', e.message);
      
      let errorMessage = "Échec de l'inscription. Veuillez réessayer.";

      // Analyse des erreurs courantes Firebase
      if (e.code === 'auth/email-already-in-use') {
          errorMessage = "Cet email est déjà utilisé.";
      } else if (e.code === 'auth/weak-password') {
          errorMessage = "Le mot de passe doit contenir au moins 6 caractères.";
      }
      
      alert(errorMessage); 
    }
  } 
}