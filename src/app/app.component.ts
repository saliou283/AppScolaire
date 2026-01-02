import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { 
  IonApp, IonRouterOutlet, IonIcon, IonList, IonContent, 
  IonMenu, IonSplitPane,  IonLabel 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  gridOutline, schoolOutline, layersOutline, bookOutline, 
  receiptOutline, chatbubblesOutline, searchOutline, notificationsOutline,
  people, alertCircle, rocket, ribbon, homeOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterLink, RouterLinkActive,
    IonApp, IonRouterOutlet, IonIcon, IonList, IonContent, 
    IonMenu, IonSplitPane,  IonLabel
  ]
})
export class AppComponent implements OnInit {
  constructor() {
    // On enregistre les icônes nécessaires
    addIcons({ 
      gridOutline, schoolOutline, layersOutline, bookOutline, 
      receiptOutline, chatbubblesOutline, searchOutline, notificationsOutline,
      people, alertCircle, rocket, ribbon, homeOutline
    });
  }

  ngOnInit() {
    console.log('App Shell chargée');
  }
}