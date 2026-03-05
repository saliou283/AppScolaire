import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { 
  IonApp, IonSplitPane, IonMenu, IonContent, IonHeader, IonTitle, 
  IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, 
  IonLabel, IonIcon, IonAvatar, IonText, IonSearchbar,
  IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, 
  IonCardSubtitle, IonBadge, IonButton, IonFab, IonFabButton,
  IonTabs, IonTabBar, IonTabButton, IonFooter, IonRouterOutlet,
   IonBackButton, IonCardContent, IonChip
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-pedagogique',
  templateUrl: './pedagogique.page.html',
  styleUrls: ['./pedagogique.page.scss'],
  standalone: true,
  imports: [
                          IonContent,
                          IonCard,
                          IonCardContent, 
                          //IonLabel, 
                          IonToolbar,  
                         // IonIcon,  
                         // CommonModule,
                          FormsModule,
                          IonContent, 
                          IonHeader,
                          IonTitle, 
                          IonButtons, 
                         // IonSearchbar,
                          IonGrid, 
                          IonRow,
                          IonCol,
                          IonCard,
                          IonCardHeader, 
                          IonCardTitle, 
                          IonCardSubtitle,
                         // IonTabButton,
                         // IonFooter, 
                         // IonRouterOutlet,
                          IonBackButton,
                          IonCardContent, 
                          IonChip
  ]
})
export class PedagogiquePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
