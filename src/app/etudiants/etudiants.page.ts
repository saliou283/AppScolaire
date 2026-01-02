// src/app/etudiant/etudiant.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
  IonButton, IonIcon, IonList, IonItem, IonLabel,  
  IonListHeader,  AlertController , IonNote
} from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { addCircleOutline, trashOutline, createOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ChangeDetectorRef } from '@angular/core';
export interface IEtudiant {
  id?: string;
  nom: string;
  matricule: string;
  filiere: string;
}

addIcons({ addCircleOutline, trashOutline, createOutline });

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiants.page.html',
  styleUrls: ['./etudiants.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
    IonButton, IonIcon, IonList, IonItem, IonLabel,  
    IonListHeader, IonNote
  ],
  
  providers: [
    AlertController, 
    // DataService // <-- Ajouté ici si non global
  ]
})
export class EtudiantPage implements OnInit {

  etudiants$!: Observable<IEtudiant[]>; 
  readonly COLLECTION_NAME = 'etudiants'; 

  constructor(
    private dataService: DataService,
    private alertController: AlertController
    
  ) { 

  }

  ngOnInit() {
    this.etudiants$ = this.dataService.getData<IEtudiant>(this.COLLECTION_NAME);
  }

  async presentAddEtudiantAlert() {
    const alert = await this.alertController.create({
      header: 'Ajouter un nouvel étudiant',
      inputs: [
        { name: 'nom', type: 'text', placeholder: 'Nom et Prénom' },
        { name: 'matricule', type: 'text', placeholder: 'Matricule' },
        { name: 'filiere', type: 'text', placeholder: 'Filière' },
      ],
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Ajouter',
          handler: (data) => {
            if (data.nom && data.matricule) {
              const nouvelEtudiant: IEtudiant = {
                nom: data.nom,
                matricule: data.matricule,
                filiere: data.filiere || 'Non spécifiée'
              };
              this.addEtudiant(nouvelEtudiant);
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async addEtudiant(etudiant: IEtudiant) {
    try {
      await this.dataService.addData(this.COLLECTION_NAME, etudiant);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'étudiant :', error);
    }
  }

  async deleteEtudiant(id: string) {
    if (!id) return;
    try {
     await this.dataService.deleteData(this.COLLECTION_NAME, id);
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'étudiant :', error);
    }
  }
  
  async updateEtudiant(etudiant: IEtudiant) {
    if (!etudiant.id) return;
    
    const newFiliere = prompt(`Modifier la filière de ${etudiant.nom}:`, etudiant.filiere);
    
    if (newFiliere !== null) { 
      try {
        await this.dataService.updateData(this.COLLECTION_NAME, etudiant.id, { filiere: newFiliere });
      } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'étudiant :', error);
      }
    }
  }
}