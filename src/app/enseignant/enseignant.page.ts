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

  listeTuteurs: any[] | null = null; // Initialisez à null, ou à un tableau vide [] si vous préférez

  constructor() { }

  ngOnInit() {
    // Ici, vous simulerez (ou effectuerez réellement) le chargement de vos données.
    this.loadTuteurs();
  }

  loadTuteurs() {
    // *** REMPLACEZ CECI PAR VOTRE VRAI APPEL API ***
    // Par exemple, si vous avez un service 'TuteurService' avec une méthode 'getTuteurs()':
    // this.tuteurService.getTuteurs().subscribe(data => {
    //   this.listeTuteurs = data;
    // });

    // Pour l'instant, simulons un chargement avec un délai :
    setTimeout(() => {
      this.listeTuteurs = [
        { id: 1, nom: 'Ba', prenom: 'Aminata', matieres: 'Communication', email: 'aminataba@gmail.com' },
        { id: 2, nom: 'Ndiaye', prenom: 'Abdou Khadre', matieres: 'Initiation à la programmation', email: 'abdoukhadre@ecole.com' },
        { id: 3, nom: 'Faye', prenom: 'Aliou', matieres: 'Infographie', email: 'alioufaye@ecole.com' },
        { id: 4, nom: 'Badiane', prenom: 'Serigne', matieres: 'Droit cons', email: 'serignebadiane@ecole.com' },
        { id: 5, nom: 'Ngom', prenom: 'Aliou', matieres: 'Algorithme', email: 'alioungom@ecole.com' },
        { id: 6, nom: 'Thiam', prenom: 'Modou', matieres: 'Gestion', email: 'Modouthiam@ecole.com' },
      ];
      console.log('Données des tuteurs chargées !');
    }, 1000); // Délai de 1 seconde pour simuler un appel réseau
  }
}