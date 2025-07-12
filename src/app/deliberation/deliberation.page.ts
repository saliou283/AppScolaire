import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

interface DeliberationResult {
  studentId: string;
  studentName: string;
  class: string;
  period: string;
  average: number;
  decision: 'Admis' | 'Refusé' | 'Passage conditionnel' | 'Redouble' | 'En attente';
  comment: string;
}

@Component({
  selector: 'app-deliberation',
  templateUrl: './deliberation.page.html',
  styleUrls: ['./deliberation.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,]
})
export class DeliberationPage implements OnInit {

  allDeliberationData: DeliberationResult[] = [];
  deliberationData: DeliberationResult[] = []; 
  selectedClass: string = '';
  selectedPeriod: string = '';

  availableClasses: string[] = ['Licence 1', 'Licence 2', 'Licence 3'];
  availablePeriods: string[] = ['Semestre 1','Semestre 2',  'Semestre 3','Semestre 4', 'Semestre 5', 'Semestre 6', 'Année Complète'];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.loadAllDeliberationData();
  }

  loadAllDeliberationData() {
    this.allDeliberationData = [
      { studentId: '1', studentName: 'Modou', class: 'Licence 1', period: 'Semestre 1', average: 14.5, decision: 'Admis', comment: 'Bon Semestre, continuez ainsi.' },
      { studentId: '2', studentName: 'Nafi', class: 'Licence 2', period: 'Semestre 2', average: 10.8, decision: 'Passage conditionnel', comment: 'Des efforts sont nécessaires en Algorithme.' },
      { studentId: '3', studentName: 'Samba ', class: 'Licence 3', period: 'Semestre 6', average: 16.12, decision: 'Admis', comment: 'Excellent.' },
       { studentId: '4', studentName: 'Astou ', class: 'Licence 3', period: 'Semestre 6', average: 11.2, decision: 'Admis', comment: 'Résultats stables.' },
        { studentId: '5', studentName: 'Diodio ', class: 'Licence 3', period: 'Semestre 6', average: 13, decision: 'Admis', comment: 'Bon Travail.' },
        { studentId: '10', studentName: 'Oussmane', class: 'Licence 3', period: 'Semestre 5', average: 14, decision: 'Admis', comment: 'Trés bien'},
        { studentId: '5', studentName: 'Coumba ', class: 'Licence 3', period: 'Semestre 6', average: 11.02, decision: 'Admis', comment: 'Assez bien.' },
         { studentId: '6', studentName: 'Moustapha ', class: 'Licence 3', period: 'Semestre 6', average: 8.61, decision: 'Redouble', comment: 'Faible.' },
          { studentId: '7', studentName: 'Radia ', class: 'Licence 3', period: 'Semestre 6', average: 12, decision: 'Admis', comment: 'Bien.' },
           { studentId: '8', studentName: 'Djilly ', class: 'Licence 2', period: 'Semestre 4', average: 15.2, decision: 'Admis', comment: 'Trés bien.' },
             { studentId: '7', studentName: 'Rama ', class: 'Licence 3', period: 'Semestre 6', average: 12.32, decision: 'Admis', comment: 'Bien.' },
           { studentId: '8', studentName: 'Aminata ', class: 'Licence 2', period: 'Semestre 4', average: 11.2, decision: 'Admis', comment: 'bien.' },
           { studentId: '8', studentName: 'Diouma ', class: 'Licence 3', period: 'Semestre 6', average: 15, decision: 'Admis', comment: 'Trés bien.' },
           { studentId: '9', studentName: 'Ablaye', class: 'Licence 3', period: 'Semestre 5', average: 15.1, decision: 'Admis', comment: 'Excellent travail.' },
            { studentId: '10', studentName: 'Ndeye Maty', class: 'Licence 3', period: 'Semestre 5', average: 10.1, decision: 'Passage conditionnel', comment: 'Des efforts sont nécessaires en Algorithme.'},
            { studentId: '11', studentName: 'Samba', class: 'Licence 1', period: 'Semestre 2', average: 7.98, decision: 'Redouble', comment: 'Faible,' },
            { studentId: '12', studentName: 'Faty', class: 'Licence 1', period: 'Semestre 2', average: 12, decision: 'Admis', comment: 'Bien,' },
            { studentId: '12', studentName: 'Bamba', class: 'Licence 1', period: 'Semestre 2', average: 10, decision: 'Admis', comment: 'Assez bien,' },
             { studentId: '13', studentName: 'Nafissatou', class: 'Licence 1', period: 'Semestre 2', average: 14, decision: 'Admis', comment: 'Trés Bien,' },
             { studentId: '14', studentName: 'Daouda', class: 'Licence 2', period: 'Semestre 3', average: 11, decision: 'Admis', comment: 'Passable,' },
    ];

    this.loadDeliberationData();
  }

  loadDeliberationData() {
    if (this.selectedClass && this.selectedPeriod) {
      this.deliberationData = this.allDeliberationData.filter(
        data => data.class === this.selectedClass && data.period === this.selectedPeriod
      );
    } else {
      this.deliberationData = [];
    }
  }

  async generateReports() {
    console.log('Générer les relevés pour la sélection actuelle');
    alert('Fonctionnalité de génération de relevés à implémenter (ex: PDF).');
  }

  async viewStudentReport(studentId: string) {
    console.log('Voir le relevé de l\'étudiant :', studentId);
    alert(`Afficher le relevé détaillé pour l'étudiant ${studentId} à implémenter.`);
  }

  async editDeliberation(result: DeliberationResult) {
    console.log('Modifier la délibération pour :', result);
    alert(`Modifier la décision/commentaire pour ${result.studentName} à implémenter.`);
  }
}