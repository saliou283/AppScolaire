import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
    IonButton, IonItem, IonLabel, IonIcon, IonBadge,  IonGrid, 
     IonRow,  IonCol, IonCard, IonFabButton, IonFab, IonList, 
     IonCardHeader, IonCardTitle, IonTabs, IonFooter, IonTabBar, 
     IonTabButton, 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-historiques',
  templateUrl: './historiques.page.html',
  styleUrls: ['./historiques.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule 
  ],
})
export class HistoriquesPage implements OnInit {


  constructor(private alertController: AlertController) {}

  ngOnInit() {
  
  }
  }

  