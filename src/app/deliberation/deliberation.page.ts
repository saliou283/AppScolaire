// src/app/deliberation/deliberation.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, 
  IonButton, IonItem, IonLabel,  
   IonSelect, IonSelectOption , 
} from '@ionic/angular/standalone';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { DataService } from '../services/data.service'; // Votre service de données CRUD
import { IEtudiant } from '../etudiants/etudiants.page'; // Assurez-vous d'importer IEtudiant
import { filter } from 'rxjs/operators';
import { AlertController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

// -------------------------------------------------------------
// 1. INTERFACES DE DONNÉES
// -------------------------------------------------------------

// Modèle des notes brutes stockées dans Firestore
export interface INote {
  id?: string;
  etudiantId: string;
  matiere: string; // Ex: 'Maths'
  note: number;
  coef: number; // Coefficient de la matière
  ects: number; // Crédits ECTS de la matière
}

// Modèle de la délibération finale (Calculé)
export interface IDeliberationResult {
  etudiant: IEtudiant;
  totalPoints: number;
  totalCoeff: number;
  moyenneGenerale: number;
  ectsObtenus: number;
  ectsTotaux: number;
  statut: 'ADMIS' | 'REFUSÉ' | 'REDOUBLEMENT';
  details: INote[]; // Notes brutes pour affichage détaillé
}


@Component({
  selector: 'app-deliberation',
  templateUrl: './deliberation.page.html',
  styleUrls: ['./deliberation.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, NgIf, NgFor,
    // Imports Ionic
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, 
    IonButton, IonItem, IonLabel, 
     IonSelect, IonSelectOption
  ],
  providers: [
    // DataService (déjà fourni en root)
  ]
})
export class DeliberationPage implements OnInit {
  
  // Observables des données brutes
  etudiants$: Observable<IEtudiant[]>;
  notes$: Observable<INote[]>;
  public window: any = window;

  // Observable du résultat calculé
  deliberationResults$!: Observable<IDeliberationResult[]>;

  // Filtres
  selectedFiliere: string = 'Toutes';
  filieres: string[] = ['Toutes']; // Sera rempli au chargement
  
  readonly ETUDIANT_COLLECTION = 'etudiants';
  readonly NOTES_COLLECTION = 'notes';

  constructor(
               private dataService: DataService,
               private alertController: AlertController,
               private router: Router
   ) {
    // Initialisation des Observables de lecture
    this.etudiants$ = this.dataService.getData<IEtudiant>(this.ETUDIANT_COLLECTION);
    this.notes$ = this.dataService.getData<INote>(this.NOTES_COLLECTION);
  }

//nouveau
  goToBulletinDetails(etudiantId: string) {
  if (etudiantId) {
    // Navigue vers /bulletin/E001, par exemple
    this.router.navigate(['/bulletin', etudiantId]); 
  }
}

  async showDetails(result: IDeliberationResult) {
        const noteDetails = result.details.map(note => 
            `${note.matiere}: ${note.note}/20 (Coef: ${note.coef}, ECTS: ${note.ects})`
        ).join('\n'); // Formate les notes pour l'affichage

        const alert = await this.alertController.create({
            header: `Notes de ${result.etudiant.nom} (${result.statut})`,
            subHeader: `MG: ${result.moyenneGenerale.toFixed(2)} | ECTS Obtenus: ${result.ectsObtenus}/${result.ectsTotaux}`,
            message: noteDetails || "Aucune note trouvée.",
            buttons: ['OK'],
        });
        await alert.present(); // 🚨 VÉRIFIEZ QUE VOUS APPELEZ .present()
    }
    

  ngOnInit() {
    this.deliberationResults$ = combineLatest([
      this.etudiants$,
      this.notes$,
      // Pipe pour observer les changements du filtre de filière
      this.createFiliereFilterObservable().pipe(startWith('Toutes')) 
    ]).pipe(
      // Map pour effectuer le calcul et le filtrage à chaque changement de source
      map(([etudiants, notes, filiereFiltre]) => {
        // 1. Mise à jour des options de filière pour le filtre
        const allFilieres = new Set(etudiants.map(e => e.filiere));
        this.filieres = ['Toutes', ...Array.from(allFilieres)];

        // 2. Filtrage des étudiants
        const etudiantsFiltres = etudiants.filter(e => 
          filiereFiltre === 'Toutes' || e.filiere === filiereFiltre
        );
        
        // 3. Calcul de la délibération
        return this.calculateDeliberation(etudiantsFiltres, notes);
      })
    );
  }
  
  // Crée un Observable basé sur le changement de la propriété selectedFiliere
  private createFiliereFilterObservable(): Observable<string> {
    return new Observable(observer => {
      // Pour une implémentation plus propre, utilisez un Subject à la place de cette fonction
      // simple qui dépend de l'événement (change) dans le template.
      // Dans le HTML, l'événement (ionChange) appellera loadFilteredResults() qui met à jour selectedFiliere.
      observer.next(this.selectedFiliere);
    });
  }

  // Méthode appelée par le HTML pour mettre à jour le filtre
  loadFilteredResults(event: any) {
    this.selectedFiliere = event.detail.value;
    // La mise à jour de selectedFiliere déclenche le re-calcul via combineLatest
  }

  /**
   * Logique de calcul de la délibération pour chaque étudiant.
   */
  private calculateDeliberation(etudiants: IEtudiant[], notes: INote[]): IDeliberationResult[] {
    const results: IDeliberationResult[] = [];
    const notesByStudent = notes.reduce((acc, note) => {
      (acc[note.etudiantId] = acc[note.etudiantId] || []).push(note);
      return acc;
    }, {} as Record<string, INote[]>);

    for (const etudiant of etudiants) {
      const studentNotes = notesByStudent[etudiant.id!] || [];
      
      let totalPoints = 0;
      let totalCoeff = 0;
      let ectsObtenus = 0;
      let ectsTotaux = 0;
      
      // Calcul des points, coefficients et ECTS
      studentNotes.forEach(note => {
        totalPoints += note.note * note.coef;
        totalCoeff += note.coef;
        ectsTotaux += note.ects;

        // Règle de validation des ECTS : La note doit être >= 10
        if (note.note >= 10) {
          ectsObtenus += note.ects;
        }
      });

      const moyenneGenerale = totalCoeff > 0 ? (totalPoints / totalCoeff) : 0;

      // Détermination du Statut (Règles simplifiées)
      let statut: IDeliberationResult['statut'];
      
      // Condition 1 : Moyenne Générale
      if (moyenneGenerale >= 12) {
        statut = 'ADMIS';
      } else if (moyenneGenerale >= 10) {
        // Condition 2 : Rattrapage possible (si moyenne >= 10)
        // Peut être complexifié avec des règles de compensation.
        statut = 'ADMIS'; 
      } else {
        // Condition 3 : Echec direct
        statut = 'REFUSÉ'; 
      }
      
      // Affinement du statut basé sur le taux d'ECTS
      if (ectsObtenus < ectsTotaux * 0.5 && moyenneGenerale < 10) {
           statut = 'REDOUBLEMENT';
      }

      results.push({
        etudiant: etudiant,
        totalPoints,
        totalCoeff,
        moyenneGenerale,
        ectsObtenus,
        ectsTotaux,
        statut,
        details: studentNotes
      });
    }

    return results;
  }
}