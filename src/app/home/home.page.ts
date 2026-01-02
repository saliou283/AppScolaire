import { Component, OnInit, inject, EnvironmentInjector, runInInjectionContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; 

import { collectionData, Firestore, collection } from '@angular/fire/firestore';
import { 
  IonContent,   
  IonButton, 
  IonIcon, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonSearchbar,
  AlertController,
  ModalController,
  IonLabel
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { 
  analyticsOutline, 
  searchOutline, 
  notificationsOutline, 
  people, 
  rocket, 
  ribbon, 
  alertCircle,
  rocketOutline,
  colorPaletteOutline,
  personCircleOutline,
  logInOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonLabel
  ],
  providers: [AlertController, ModalController]
})
export class HomePage implements OnInit {
  // Injection des services
  private firestore = inject(Firestore);
  private injector = inject(EnvironmentInjector);
  private router = inject(Router); // Utilisation de inject() pour la cohérence

  // Données
  public items$ = collectionData(collection(this.firestore, 'items'));
  public stats = {
    totalStudents: 450,
    activeProjects: 12,
    internshipRate: 85,
    delayedProjects: 5
  };

  public announcements = [
    { id: 1, title: "Nouvelle mise à jour", date: "2024-05-15", content: "Mise à jour déployée." },
    { id: 2, title: "Rappel inscriptions", date: "2024-05-10", content: "Début demain." }
  ];

  constructor() {
    // Enregistrement des icônes
    addIcons({ 
      analyticsOutline, 
      searchOutline, 
      notificationsOutline,
      people,
      rocket,
      ribbon,
      alertCircle,
      rocketOutline,
      colorPaletteOutline,
      personCircleOutline,
      logInOutline
    });
  }

  ngOnInit() {
    console.log('Dashboard chargé avec succès');
  }

  // Méthodes de navigation
  goToProfilePage() {
    console.log('Navigating to Profile Page...');
    this.router.navigate(['/profile']);
  }

  goToLoginPage() {
    console.log('Navigating to Login Page...');
    this.router.navigate(['/login']);
  }

  goToFiliere(filiereName: string) {
    console.log('Navigation vers la filière :', filiereName);
  }

  // Autres méthodes
  doRefresh(event: any) {
    setTimeout(() => {
      this.stats.totalStudents += 1;
      event.target.complete();
    }, 1500);
  }

  loadDataManual() {
    runInInjectionContext(this.injector, () => {
      const col = collection(this.firestore, 'items');
      this.items$ = collectionData(col);
    });
  }

  // Placeholders pour les futures pages
  goToEtudiantPage() { this.router.navigate(['/etudiant']); }
  goToEnseignantPage() { this.router.navigate(['/enseignant']); }
  goToNotePage() { this.router.navigate(['/notes']); }
  goToAbsencePage() { this.router.navigate(['/absences']); }
  goToEmploiPage() { this.router.navigate(['/emploi']); }
  goToDeliberationPage() { this.router.navigate(['/deliberation']); }
}
