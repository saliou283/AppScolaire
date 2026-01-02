import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

interface Eleve {
  id: number;
  nom: string;
  prenom: string;
}

@Component({
  selector: 'app-saisie-notes',
  templateUrl: './saisie-notes.page.html',
  styleUrls: ['./saisie-notes.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class SaisieNotesPage implements OnInit {
  // Injections
  private fb = inject(FormBuilder);
  private alertController = inject(AlertController);
  private dataService = inject(DataService);

  notesForm!: FormGroup;
  moyenneClasse: number = 0;

  eleves: Eleve[] = [
    { id: 1, nom: 'KOULIBALY', prenom: 'Aminata' },
    { id: 2, nom: 'DIOP', prenom: 'Moustapha' },
    { id: 3, nom: 'NDIAYE', prenom: 'Fatou' },
    { id: 4, nom: 'SARR', prenom: 'Moussa' },
  ];

  evaluation = {
    id: 'eval_001',
    titre: 'Contrôle Algèbre',
    matiere: 'Mathématiques',
    classe: '6ème A',
    bareme: 20
  };

  ngOnInit() {
    this.initialiserFormulaire();
  }

  get notes() {
    return this.notesForm.get('notes') as FormArray;
  }

  initialiserFormulaire() {
    this.notesForm = this.fb.group({
      notes: this.fb.array(
        this.eleves.map(eleve => this.creerGroupeNote(eleve))
      )
    });

    this.notesForm.valueChanges.subscribe(() => {
      this.calculerMoyenne();
    });
  }

  creerGroupeNote(eleve: Eleve): FormGroup {
    return this.fb.group({
      eleveId: [eleve.id],
      nomComplet: [`${eleve.nom} ${eleve.prenom}`],
      note: ['', [Validators.required, Validators.max(this.evaluation.bareme), Validators.min(0)]],
      commentaire: ['']
    });
  }

  calculerMoyenne() {
    const valeursForm = this.notes.value;
    const notesValides: number[] = valeursForm
      .map((item: any) => parseFloat(item.note))
      .filter((n: number) => !isNaN(n));

    this.moyenneClasse = notesValides.length > 0 
      ? notesValides.reduce((acc, n) => acc + n, 0) / notesValides.length 
      : 0;
  }

  // CETTE FONCTION DOIT ÊTRE EXACTEMENT ICI
  async enregistrerNotes() {
    console.log("Appel de enregistrerNotes...");
    if (this.notesForm.valid) {
      try {
        await this.dataService.enregistrerNotes(this.evaluation.id, this.notes.value);
        this.presentAlert('Succès', 'Les notes ont été sauvegardées.');
      } catch (e) {
        this.presentAlert('Erreur', 'Échec de la sauvegarde.');
      }
    } else {
      this.presentAlert('Attention', 'Le formulaire est invalide.');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}