/**
 * Ce fichier contiendrait les clés de configuration de votre projet Firebase.
 *
 * Dans un environnement de production réel, ces clés seraient obtenues
 * depuis les paramètres de votre projet sur la console Firebase.
 *
 * NOTE IMPORTANTE : Les valeurs ci-dessous sont des exemples. 
 * Vous devez les remplacer par vos propres clés pour que la connexion fonctionne.
 */

// Interface pour typer la configuration de Firebase
  export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

export const environment: { firebase: FirebaseConfig } = {
  firebase: {
    // 🚨 REMPLACEZ PAR VOTRE VRAIE CLÉ API 🚨
    apiKey: "AIzaSyCNliXDfrwPrNTqD16dh0Q80iUvb-PhWuc", 
    
    // 🚨 REMPLACEZ PAR VOTRE VRAI DOMAINE D'AUTHENTIFICATION 🚨
    authDomain: "idascolaire.firebaseapp.com",
    
    // 🚨 REMPLACEZ PAR VOTRE ID DE PROJET 🚨
    projectId: "idascolaire",
    
    // 🚨 REMPLACEZ PAR VOTRE NOM DE BUCKET 🚨
    storageBucket: "idascolaire.firebasestorage.app",
    
    // 🚨 REMPLACEZ PAR VOTRE ID DE L'EXPÉDITEUR 🚨
    messagingSenderId: "568203670987",
    
    // 🚨 REMPLACEZ PAR VOTRE ID D'APPLICATION 🚨
    appId: "1:568203670987:web:825d0c1ebbb3db4109b24e",

     measurementId: "G-2NMXF0K0KN"

  }
};