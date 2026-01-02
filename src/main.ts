import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import '@angular/compiler'; 


// Configuration Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment';

// Routes et Composant Principal
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// Icônes
import { addIcons } from 'ionicons';
import {
  personCircleOutline, logInOutline, documentTextOutline, addCircleOutline, 
  trashOutline, createOutline, eyeOutline, calendarOutline, personAddOutline, 
  menuOutline, arrowBackOutline, school, timeOutline, gridOutline, 
  peopleOutline, briefcaseOutline, receiptOutline, mailOutline, moonOutline,
  notificationsOutline, searchOutline, wallet, warning, checkmarkCircle, people
} from 'ionicons/icons';

// 1. Enregistrement global des icônes (pour éviter de le refaire partout)
addIcons({
  personCircleOutline, logInOutline, documentTextOutline, addCircleOutline, 
  trashOutline, createOutline, eyeOutline, calendarOutline, personAddOutline, 
  menuOutline, arrowBackOutline, school, timeOutline, gridOutline, 
  peopleOutline, briefcaseOutline, receiptOutline, mailOutline, moonOutline,
  notificationsOutline, searchOutline, wallet, warning, checkmarkCircle, people
});

// 2. Gestion du mode production
if (environment.production) {
  enableProdMode();
}

// 3. Un SEUL et unique bootstrapApplication
bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),

    // Configuration Firebase & Firestore
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
}).catch((err) => console.error(err));