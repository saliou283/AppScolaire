// src/app/missing/missing.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, 
  IonButton, IonIcon, IonList, IonItem, IonLabel, IonNote, 
  AlertController, ModalController, IonListHeader 
} from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service'; // Votre service de données CRUD
import { addCircleOutline, trashOutline, createOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

// Interface pour un enregistrement d'absence
export interface IAbsence {
  id?: string;
  etudiantId: string;   // ID de l'étudiant concerné
  etudiantNom: string;  // Nom de l'étudiant (pour l'affichage)
  date: string;         // Date de l'absence (format AAAA-MM-JJ)
  motif: string;        // Motif (ex: 'Justifié', 'Non justifié')
  cours: string;        // Matière ou cours concerné
  dureeHeures: number;  // Durée de l'absence en heures
}

// Enregistrement des icônes
addIcons({ addCircleOutline, trashOutline, createOutline });

@Component({
  // ✅ CORRECTION : Utilisation de 'app-missing' comme sélecteur
  selector: 'app-missing', 
  // ✅ CORRECTION : Utilisation de './missing.page.html'
  templateUrl: './missing.page.html', 
  // ✅ CORRECTION : Utilisation de './missing.page.scss'
  styleUrls: ['./missing.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // Imports Ionic
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, 
    IonButton, IonIcon, IonList, IonItem, IonLabel, IonNote, 
    IonListHeader
  ],
  providers: [
    AlertController, 
    ModalController
  ]
})
// ✅ Le nom de la classe correspond au fichier
export class MissingPage implements OnInit { 
  
  absences$!: Observable<IAbsence[]>;
  // Le nom de la collection dans Firestore reste 'absences'
  readonly COLLECTION_NAME = 'absences'; 

  // Liste des étudiants (simplifiée pour l'exemple, à charger via DataService dans la réalité)
  availableStudents = [
    { id: 'E001', nom: 'Diop, Fatima' },
    { id: 'E002', nom: 'Ndiaye, Mamadou' },
    // ...
  ];
  
  constructor(
    private dataService: DataService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Récupération de toutes les absences en temps réel
    this.absences$ = this.dataService.getData<IAbsence>(this.COLLECTION_NAME);
  }

  // -------------------------------------------------------------
  // CRUD : CREATE / DELETE
  // -------------------------------------------------------------

  /**
   * Ouvre la modale/alerte pour enregistrer une nouvelle absence.
   */
  async presentAddAbsenceAlert() {
    
    // ❌ Ligne inutilisée et enlevée : const studentInputs = ...
    
    const alert = await this.alertController.create({
      header: 'Enregistrer une Absence',
      inputs: [
        { name: 'date', type: 'date', placeholder: 'Date' },
        { name: 'cours', type: 'text', placeholder: 'Cours (Matière)' },
        { name: 'duree', type: 'number', placeholder: 'Durée (Heures)' },
        { name: 'motif', type: 'text', placeholder: 'Motif (Justifié/Non justifié)' },
      ],
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Enregistrer',
          handler: (data) => {
            // NOTE: Cette partie nécessite toujours une sélection d'étudiant plus propre
            const studentId = prompt("Entrez l'ID de l'étudiant (ex: E001)"); 
            const student = this.availableStudents.find(s => s.id === studentId);

            if (data.date && data.cours && student) {
              const nouvelleAbsence: IAbsence = {
                etudiantId: student.id,
                etudiantNom: student.nom,
                date: data.date,
                cours: data.cours,
                dureeHeures: parseFloat(data.duree) || 1,
                motif: data.motif || 'Non spécifié'
              };
              this.addAbsence(nouvelleAbsence);
            } else {
              window.alert('Veuillez fournir les informations complètes.');
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async addAbsence(absence: IAbsence) {
    try {
      await this.dataService.addData(this.COLLECTION_NAME, absence);
      console.log('Absence ajoutée :', absence);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'absence :', error);
    }
  }

  /**
   * Supprime un enregistrement d'absence.
   */
  async deleteAbsence(id: string) {
    if (!id) return;

    // Ajout d'une confirmation rapide avant la suppression
    const confirmAlert = await this.alertController.create({
      header: 'Confirmer la suppression',
      message: 'Êtes-vous sûr de vouloir supprimer cet enregistrement d\'absence ?',
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Supprimer',
          handler: async () => {
            try {
              await this.dataService.deleteData(this.COLLECTION_NAME, id);
            } catch (error) {
              console.error('Erreur lors de la suppression :', error);
            }
          }
        }
      ]
    });
    await confirmAlert.present();
  }
}