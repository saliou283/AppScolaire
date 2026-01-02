import { Component, OnInit, inject, EnvironmentInjector, runInInjectionContext } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    IonContent,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar ,
    IonLabel
  ],
  providers: [AlertController, ModalController]
})
export class HomePage implements OnInit {
  // Injection des services via la fonction inject()
  private firestore = inject(Firestore);
  private injector = inject(EnvironmentInjector);

  // Initialisation directe : le contexte d'injection est valide ici
  public items$ = collectionData(collection(this.firestore, 'items'));

  public stats = {
    totalStudents: 450,
    activeProjects: 12,
    internshipRate: 85,
    delayedProjects: 5
  };

  public announcements = [
    { id: 1, title: "Nouvelle mise à jour du système", date: "2024-05-15", content: "Une mise à jour importante a été déployée." },
    { id: 2, title: "Rappel sur les inscriptions", date: "2024-05-10", content: "Les inscriptions pour le semestre suivant commencent demain." }
  ];

  constructor() {
    // Enregistrement des icônes pour le mode standalone [1, 2]
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

  // Exemple d'utilisation de runInInjectionContext pour un chargement manuel
  loadDataManual() {
    runInInjectionContext(this.injector, () => {
      const col = collection(this.firestore, 'items');
      this.items$ = collectionData(col);
    });
  }

  doRefresh(event: any) {
    setTimeout(() => {
      this.stats.totalStudents += 1;
      event.target.complete();
    }, 1500);
  }

  goToFiliere(filiereName: string) {
    console.log('Navigation vers la filière :', filiereName);
  }

  // Méthodes de navigation à implémenter selon vos besoins
  goToProfilePage() {}
  goToLoginPage() {}
  goToEtudiantPage() {}
  goToEnseignantPage() {}
  goToNotePage() {}
  goToAbsencePage() {}
  goToEmploiPage() {}
  goToDeliberationPage() {}
}