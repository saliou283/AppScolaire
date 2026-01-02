import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth'; 
// Si vous utilisez d'anciennes versions, l'importation de 'Auth' pourrait être différente.

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // 🔑 Injecter le module d'authentification Firebase (Auth)
  constructor(private auth: Auth) { } 

  /**
   * Tente de connecter un utilisateur avec un email et un mot de passe.
   * @param email L'email de l'utilisateur.
   * @param password Le mot de passe de l'utilisateur.
   * @returns Une promesse contenant les identifiants de l'utilisateur (UserCredential).
   */
  async signIn(email: string, password: string): Promise<UserCredential> {
    
    // 💥 C'EST CETTE MÉTHODE QUI MANQUAIT 💥
    return await signInWithEmailAndPassword(this.auth, email, password);
  }
}