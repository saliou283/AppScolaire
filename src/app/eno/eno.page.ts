// src/app/deliberation/deliberation.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
  IonButton, IonItem, IonLabel, IonIcon, IonBadge,  IonGrid, 
   IonRow,  IonCol, IonCard, IonFabButton, IonFab, IonList, 
   IonCardHeader, IonCardTitle, IonTabs, IonFooter, IonTabBar, 
   IonTabButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-eno',
  templateUrl: './eno.page.html',
  styleUrls: ['./eno.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonContent,
      IonContent,
     IonButton, IonLabel, IonIcon, IonBadge
   
   
  ],

})
export class EnoPage implements OnInit {

  constructor() { }
    
  ngOnInit() {
   
  }
  
   }