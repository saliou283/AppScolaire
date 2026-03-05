import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';

// Import de toutes les icônes nécessaires
import { 
  searchOutline, notificationsOutline, analyticsOutline, 
  people, rocket, ribbon, alertCircle, ellipsisVertical, briefcaseOutline,
  settingsOutline, gridOutline, folderOutline, gitNetworkOutline,
  desktopOutline, cloudOutline, informationCircle, chatbubblesOutline,
  arrowUpCircleOutline, appsOutline, schoolOutline, locationOutline,
  chatbubbleEllipsesOutline, libraryOutline, timeOutline,
  terminalOutline, codeWorkingOutline, globeOutline, cubeOutline,
  brushOutline, shieldCheckmarkOutline, colorPaletteOutline, calendarOutline, listOutline
} from 'ionicons/icons';

// Import des composants Ionic
import { 
  IonApp, IonSplitPane, IonMenu, IonContent, IonHeader, IonTitle, 
  IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, 
  IonLabel, IonIcon, IonAvatar, IonText, IonSearchbar,
  IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, 
  IonCardSubtitle, IonBadge, IonButton, IonFab, IonFabButton,
  IonTabs, IonTabBar, IonTabButton, IonFooter, IonRouterOutlet
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonSplitPane, IonMenu, IonContent, IonHeader, IonTitle, 
    IonToolbar, IonMenuButton, IonList, IonItem, 
    IonLabel, IonIcon, IonAvatar, IonSearchbar,  
      IonGrid, IonRow, IonCol, IonButtons, 
  ],
})
export class HomePage implements OnInit {

  public filieres = ['IDA', 'MIC', 'CD', 'AGN'];
  
  public activities = [
    { text: "Hackathon IDA lancé le 22 janvier 2026 à l'ENO de Diourbel", color: 'blue' },
    { text: "Stages MIC validés", color: 'green' },
    { text: "Nouveaux supports CD disponibles", color: 'blue' }
  ];

  constructor() {
    // Enregistrement de TOUTES les icônes en une seule fois
    addIcons({ 
      searchOutline, notificationsOutline, analyticsOutline, listOutline,
      people, rocket, ribbon, alertCircle, ellipsisVertical, briefcaseOutline,
      settingsOutline, gridOutline, folderOutline, gitNetworkOutline,
      desktopOutline, cloudOutline, informationCircle, chatbubblesOutline,
      arrowUpCircleOutline, appsOutline, schoolOutline, locationOutline,
      chatbubbleEllipsesOutline, libraryOutline, timeOutline,
      terminalOutline, codeWorkingOutline, globeOutline, cubeOutline,
      brushOutline, shieldCheckmarkOutline, colorPaletteOutline, calendarOutline
    });
  }

  ngOnInit() {
    console.log('Système Numérique ENO Diourbel Opérationnel');
  }

  generateReport() {
    console.log('Génération du rapport de performance...');
  }
}