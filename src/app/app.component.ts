import { Component, EnvironmentInjector, inject } from '@angular/core';
// Suppression de l'import compiler
import { 
  IonApp, 
 // IonTabs, 
//  IonTabBar, 
//  IonTabButton, 
  //IonIcon, 
  //IonLabel, 
  IonRouterOutlet 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Nom de fichier standard
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    IonApp, 
    //IonTabs, 
   // IonTabBar, 
   // IonTabButton, 
    //IonIcon, 
    //IonLabel, 
    IonRouterOutlet
  ],
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    // Enregistrement des icônes
    addIcons({ triangle, ellipse, square });
  }
}