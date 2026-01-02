import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
  IonButton, IonIcon, IonList, IonItem, IonLabel, 
  IonListHeader, AlertController 
} from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { addCircleOutline, trashOutline, createOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

// 1. Interface pour une Note
export interface INote {
  id?: string;
  titre: string;
  contenu: string;
  dateModification: string; // Stocké comme une chaîne (Date.now().toString() par exemple)
}

addIcons({ addCircleOutline, trashOutline, createOutline });

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html', // Assurez-vous d'avoir ce fichier
  styleUrls: ['./note.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
    IonButton, IonIcon, IonList, IonItem, IonLabel, IonListHeader, // IonTextarea pour l'édition
  ],
  providers: [AlertController] 
})
export class NotePage implements OnInit {

  notes$!: Observable<INote[]>;
  readonly COLLECTION_NAME = 'notes'; // Collection Firestore pour les notes

  constructor(
    private dataService: DataService,
    private alertController: AlertController
  ) {}

  // 💥 CORRECTION DE STABILITÉ : Appel de service dans ngOnInit
  ngOnInit() {
    this.notes$ = this.dataService.getData<INote>(this.COLLECTION_NAME);
  }

  /**
   * 🎯 CREATE (C) : Ouvre une alerte pour ajouter une nouvelle note.
   */
  async presentAddNoteAlert() {
    const date = new Date().toLocaleString();
    
    const alert = await this.alertController.create({
      header: 'Nouvelle Note',
      inputs: [
        { name: 'titre', type: 'text', placeholder: 'Titre de la note' },
        { name: 'contenu', type: 'textarea', placeholder: 'Contenu de la note' },
      ],
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Sauvegarder',
          handler: (data) => {
            if (data.titre && data.contenu) {
              const nouvelleNote: INote = {
                titre: data.titre,
                contenu: data.contenu,
                dateModification: date
              };
              this.addNote(nouvelleNote);
            }
          },
        },
      ],
    });
    await alert.present();
  }

  /**
   * Ajoute la note à la collection Firestore.
   */
  async addNote(note: INote) {
    try {
      await this.dataService.addData(this.COLLECTION_NAME, note);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la note :', error);
    }
  }

  /**
   * 🎯 UPDATE (U) : Ouvre une alerte pour modifier une note existante.
   */
  async updateNote(note: INote) {
    if (!note.id) return;

    const alert = await this.alertController.create({
      header: `Modifier : ${note.titre}`,
      inputs: [
        { name: 'titre', type: 'text', value: note.titre, placeholder: 'Titre' },
        { name: 'contenu', type: 'textarea', value: note.contenu, placeholder: 'Contenu' },
      ],
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Mettre à jour',
          handler: (data) => {
            if (data.titre && data.contenu) {
              const donneesMisesAJour = {
                titre: data.titre,
                contenu: data.contenu,
                dateModification: new Date().toLocaleString()
              };
              this.dataService.updateData(this.COLLECTION_NAME, note.id!, donneesMisesAJour);
            }
          },
        },
      ],
    });
    await alert.present();
  }

  /**
   * 🎯 DELETE (D) : Supprime une note.
   */
  async deleteNote(id: string) {
    if (!id) return;
    try {
      await this.dataService.deleteData(this.COLLECTION_NAME, id);
    } catch (error) {
      console.error('Erreur lors de la suppression de la note :', error);
    }
  }
}