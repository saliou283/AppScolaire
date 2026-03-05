import '@angular/compiler';
import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { RouteReuseStrategy, withComponentInputBinding } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

// Routes et Composant Principal
import { routes } from './app/app.routes'; 
import { AppComponent } from './app/app.component';

// Icônes
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, logOutOutline, add } from 'ionicons/icons';

// 1. Gestion du mode production
/*if (environment.production) {
  enableProdMode();
}*/

// 2. Initialisation sélective des icônes
// Évitez `* as allIcons` car cela brise le Tree Shaking et alourdit énormément votre bundle final.
addIcons({
  'mail-outline': mailOutline,
  'lock-closed-outline': lockClosedOutline,
  'log-out-outline': logOutOutline,
  'add': add
});

// 3. Bootstrapping
bootstrapApplication(AppComponent, { 
  providers: [
      {provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      provideIonicAngular(),
      provideRouter(routes),
      provideHttpClient(),
    

  ],
}).catch((err) => console.error(err));
