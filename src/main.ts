// src/main.ts
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Importe vos routes


// Importez ici les icônes Ionicons que vous utilisez dans votre application
// Cela permet de ne charger que les icônes nécessaires, réduisant la taille de l'application.
import { addIcons } from 'ionicons';
import {
  personCircleOutline, // Exemple d'icône pour un profil
  logInOutline,       // Exemple pour un bouton de connexion
  documentTextOutline, // Exemple pour un rapport/document
  addCircleOutline,    // Exemple pour ajouter un élément
  trashOutline,        // Exemple pour supprimer
  createOutline,       // Exemple pour modifier
  eyeOutline,          // Exemple pour visualiser
  calendarOutline,     // Exemple pour un calendrier/emploi du temps
  personAddOutline,    // Exemple pour ajouter une personne (étudiant/enseignant)
  menuOutline,         // Pour le bouton de menu latéral (<ion-menu-button>)
  arrowBackOutline,    // Pour le bouton retour (<ion-back-button>)
  // Ajoutez toutes les autres icônes que vous utilisez dans votre HTML
  // par exemple: homeOutline, settingsOutline, warningOutline, etc.
} from 'ionicons/icons';


// Active le mode production si l'environnement est en production.
// Cela désactive les contrôles de développement d'Angular pour de meilleures performances.
if (environment.production) {
  enableProdMode();
}

// Enregistre les icônes Ionicons utilisées dans l'application.
// C'est crucial pour que les icônes s'affichent et pour éviter les avertissements dans la console.
addIcons({
  personCircleOutline,
  logInOutline,
  documentTextOutline,
  addCircleOutline,
  trashOutline,
  createOutline,
  eyeOutline,
  calendarOutline,
  personAddOutline,
  menuOutline,
  arrowBackOutline,
  // Répétez ici toutes les icônes importées ci-dessus
});

// Démarre l'application Angular avec le composant racine 'AppComponent'.
// Le second argument est un objet de configuration pour les 'providers'.
bootstrapApplication(AppComponent, {
  providers: [
    // Fournit une stratégie de réutilisation des routes spécifique à Ionic,
    // ce qui aide à maintenir l'état des pages lors de la navigation avant/arrière.
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Configure Ionic Angular. C'est nécessaire pour que les composants Ionic fonctionnent.
    provideIonicAngular(),
    // Configure le système de routage d'Angular avec les routes définies dans 'app.routes.ts'.
    provideRouter(routes),
    // Si vous utilisez HttpClient pour faire des requêtes API, décommentez la ligne ci-dessous:
    // provideHttpClient(),
  ],
});
