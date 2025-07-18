import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.page.html',
  styleUrls: ['./enseignant.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonBackButton, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, 
    IonButtons, IonButton
  ]
})

export class EnseignantPage implements OnInit {

  listeTuteurs: any[] | null = null; 

  constructor() { }

  ngOnInit() {
   
    this.loadTuteurs();
  }

  loadTuteurs() {
    
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
    }, 1000); 
  }
}
