import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DataService } from '../services/data.service'; // Assurez-vous que le chemin est correct
//import { AlertController } from '@ionic/angular'; // Si vous utilisez Ionic
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { 
  IonContent, IonTitle, IonToolbar, IonButtons, 
  IonButton, IonIcon, IonList, IonItem, IonLabel,  
  IonListHeader,  AlertController , IonNote, IonCardHeader, IonCard, IonCardContent, IonCardTitle,
  IonCardSubtitle,
} from '@ionic/angular/standalone';

// Définition de l'interface pour les données du widget
interface Evaluation {
  titre: string;
  matiere: string;
  classe: string;
  dateLimite: string;
  notesSaisies: number;
  notesTotal: number;
}

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.page.html',
  styleUrls: ['./enseignant.page.scss'],
   standalone: true,
   imports: [
   CommonModule,
   FormsModule,
    IonicModule
    
    /*IonContent,  IonTitle, IonToolbar, IonButtons, 
    IonButton, IonIcon, IonList, IonItem, IonLabel,  
   IonNote, IonCardHeader, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle 
   */
  ],
})
export class EnseignantPage implements OnInit {

  // --- Injection de Dépendances (Votre code corrigé) ---
  constructor(
    private dataService: DataService,
    private alertController: AlertController,
  ) {}

  // Variables pour stocker les données du tableau de bord
  classesDuJour: any[] = [];
  evaluationsEnAttente: Evaluation[] = [];
  
  // Implémentation de la méthode d'initialisation
  ngOnInit() {
    this.chargerDonneesDashboard();
  }

  // Logique pour simuler le chargement des données depuis le service
  chargerDonneesDashboard() {
    // 1. Charger les classes du jour (simulé)
    this.classesDuJour = this.dataService.getClassesDuJour();

    // 2. Charger les évaluations à saisir (simulé)
    this.evaluationsEnAttente = [
      {
        titre: 'Devoir n°3 - P1',
        matiere: 'Mathématiques',
        classe: '6ème A',
        dateLimite: '18 Déc. 2025',
        notesSaisies: 10,
        notesTotal: 30,
      },
      {
        titre: 'Contrôle Continu',
        matiere: 'Histoire-Géo',
        classe: '5ème C',
        dateLimite: '22 Déc. 2025',
        notesSaisies: 0,
        notesTotal: 25,
      },
    ];
  }

  // Exemple d'une action du widget
  async ouvrirSaisieNotes(evaluation: Evaluation) {
    const alert = await this.alertController.create({
      header: `Action pour ${evaluation.titre}`,
      message: `Vous allez être redirigé vers la page de saisie des notes pour la classe de ${evaluation.classe}.`,
      buttons: ['OK'],
    });
    await alert.present();
    // Normalement, vous feriez ici un appel au Router : this.router.navigate(['/saisie-notes', evaluation.id]);
  }
}