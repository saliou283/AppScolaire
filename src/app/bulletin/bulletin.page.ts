// src/app/bulletin/bulletin.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // 🚨 Pour lire les paramètres de l'URL
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, 
  IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonNote
} from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { Observable, combineLatest, map, switchMap, of } from 'rxjs';
import { IEtudiant } from '../etudiants/etudiants.page'; // Assurez-vous d'importer IEtudiant
import { INote, IDeliberationResult } from '../deliberation/deliberation.page'; // Les interfaces de notes et résultats

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.page.html',
  styleUrls: ['./bulletin.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
    IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonNote
  ],
})
export class BulletinPage implements OnInit {

  bulletinResult$!: Observable<IDeliberationResult | undefined>;
  
  readonly ETUDIANT_COLLECTION = 'etudiants';
  readonly NOTES_COLLECTION = 'notes';

  constructor(
    private route: ActivatedRoute, // ✅ Injection pour lire l'URL
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.bulletinResult$ = this.route.paramMap.pipe(
      // 1. Récupérer l'ID de l'étudiant depuis l'URL
      switchMap(params => {
        const etudiantId = params.get('etudiantId');
        if (!etudiantId) return of(undefined);

        // 2. Charger l'étudiant et toutes les notes
        const etudiant$ = this.dataService.getData<IEtudiant>(this.ETUDIANT_COLLECTION).pipe(
          map(etudiants => etudiants.find(e => e.id === etudiantId))
        );
        const notes$ = this.dataService.getData<INote>(this.NOTES_COLLECTION);
        
        // 3. Combiner et calculer le résultat (logique simplifiée)
        return combineLatest([etudiant$, notes$]).pipe(
          map(([etudiant, allNotes]) => {
            if (!etudiant) return undefined;

            const studentNotes = allNotes.filter(n => n.etudiantId === etudiantId);
            
            // 🚨 REMPLACER CECI par une VRAIE FONCTION de calcul (similaire à DeliberationPage)
            return this.simpleCalculateDeliberation(etudiant, studentNotes); 
          })
        );
      })
    );
  }

  // Fonction simplifiée (REMPLACER par la logique complète de DeliberationPage)
  private simpleCalculateDeliberation(etudiant: IEtudiant, notes: INote[]): IDeliberationResult {
    let totalPoints = 0;
    let totalCoeff = 0;
    
    notes.forEach(note => {
      totalPoints += note.note * note.coef;
      totalCoeff += note.coef;
    });

    const moyenneGenerale = totalCoeff > 0 ? (totalPoints / totalCoeff) : 0;

    // Cette structure est juste pour le template. Réutilisez la logique complète
    // de la fonction calculateDeliberation de l'autre page.
    return {
      etudiant: etudiant,
      totalPoints,
      totalCoeff,
      moyenneGenerale,
      ectsObtenus: 0, 
      ectsTotaux: 0,
      statut: moyenneGenerale >= 10 ? 'ADMIS' : 'REFUSÉ',
      details: notes
    } as IDeliberationResult;
  }
}