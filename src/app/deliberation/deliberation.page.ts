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

  availableClasses: string[] = ['Seconde S2', 'Première S2', 'Terminale S2'];
  availablePeriods: string[] = ['Semestre 1','Semestre 2', 'Année Complète'];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.loadAllDeliberationData();
  }

  loadAllDeliberationData() {
    this.allDeliberationData = [
      
      //Seconde S2 semestre 1
      { studentId: '1', studentName: 'Modou Gueye', class: 'Seconde S2', period: 'Semestre 1', average: 11, decision: 'Admis', comment: 'Passable.' },
      { studentId: '2', studentName: 'Nafi Diop', class: 'Seconde S2', period: 'Semestre 1', average: 10.8, decision: 'Passage conditionnel', comment: 'Des efforts sont nécessaires en Algorithme.' },
      { studentId: '3', studentName: 'Samba Sarr', class: 'Seconde S2', period: 'Semestre 1', average: 16.12, decision: 'Admis', comment: 'Excellent.' },
      { studentId: '4', studentName: 'Astou Fall', class: 'Seconde S2', period: 'Semestre 1', average: 11.2, decision: 'Admis', comment: 'Résultats stables.' },
      { studentId: '5', studentName: 'Diodio Ndiaye', class: 'Seconde S2', period: 'Semestre 1', average: 13, decision: 'Admis', comment: 'Bon Travail.' },
      { studentId: '10', studentName: 'Oussmane Sow', class: 'Seconde S2', period: 'Semestre 1', average: 14, decision: 'Admis', comment: 'Trés bien'},
      { studentId: '5', studentName: 'Coumba ', class: 'Seconde S2', period: 'Semestre 1', average: 11.02, decision: 'Admis', comment: 'Assez bien.' },
      { studentId: '6', studentName: 'Moustapha Séne', class: 'Seconde S2', period: 'Semestre 1', average: 8.61, decision: 'Redouble', comment: 'Faible.' },
      { studentId: '7', studentName: 'Radia ', class: 'Seconde S2', period: 'Semestre 1', average: 12, decision: 'Admis', comment: 'Bien.' },
      { studentId: '8', studentName: 'Djilly Gaye', class: 'Seconde S2', period: 'Semestre 1', average: 15.2, decision: 'Admis', comment: 'Trés bien.' },
      { studentId: '7', studentName: 'Rama Sow', class: 'Seconde S2', period: 'Semestre 1', average: 12.32, decision: 'Admis', comment: 'Bien.' },
      { studentId: '8', studentName: 'Aminata ', class: 'Seconde S2', period: 'Semestre 1', average: 11.2, decision: 'Admis', comment: 'bien.' },
      { studentId: '8', studentName: 'Diouma Dione', class: 'Seconde S2', period: 'Semestre 1', average: 15, decision: 'Admis', comment: 'Trés bien.' },
      { studentId: '9', studentName: 'Ablaye Ba', class: 'Seconde S2', period: 'Semestre 1', average: 15.1, decision: 'Admis', comment: 'Excellent travail.' },
      { studentId: '10', studentName: 'Ndeye Maty', class: 'Seconde S2', period: 'Semestre 1', average: 10.1, decision: 'Passage conditionnel', comment: 'Des efforts sont nécessaires en SVT.'},
      { studentId: '11', studentName: 'Samba Ngom', class: 'Seconde S2', period: 'Semestre 1', average: 8.98, decision: 'Redouble', comment: 'Faible,' },
      { studentId: '12', studentName: 'Faty Seye', class: 'Seconde S2', period: 'Semestre 1', average: 13, decision: 'Admis', comment: 'Bien,' },
      { studentId: '12', studentName: 'Bamba Ndour', class: 'Seconde S2', period: 'Semestre 1', average: 11, decision: 'Admis', comment: 'Assez bien,' },
      { studentId: '13', studentName: 'Nafissatou Sy', class: 'Seconde S2', period: 'Semestre 1', average: 15, decision: 'Admis', comment: 'Trés Bien,' },
      { studentId: '14', studentName: 'Daouda Faye', class: 'Seconde S2', period: 'Semestre 1', average: 11, decision: 'Admis', comment: 'Passable,' },
      
      // Seconde S2 semestre 2

      { studentId: '15', studentName: 'Nabou Ndiaye', class: 'Seconde S2', period: 'Semestre 2', average: 14.5, decision: 'Admis', comment: 'Bon Semestre, continuez ainsi.' },
      { studentId: '16', studentName: 'Mary Diaw', class: 'Seconde S2', period: 'Semestre 2', average: 10.8, decision: 'Passage conditionnel', comment: 'Des efforts sont nécessaires en français.' },
      { studentId: '17', studentName: 'amadou Dia ', class: 'Seconde S2', period: 'Semestre 2', average: 16.12, decision: 'Admis', comment: 'Excellent.' },
      { studentId: '18', studentName: 'Astou ', class: 'Seconde S2', period: 'Semestre 2 ', average: 11.2, decision: 'Admis', comment: 'Résultats stables.' },
      { studentId: '19', studentName: 'Diodio ', class: 'Seconde S2', period: 'Semestre 2', average: 13, decision: 'Admis', comment: 'Bon Travail.' },
      { studentId: '20', studentName: 'Oussmane', class: 'Seconde S2', period: 'Semestre 2', average: 14, decision: 'Admis', comment: 'Trés bien'},
      { studentId: '21', studentName: 'Coumba ', class: 'Seconde S2', period: 'Semestre 2', average: 11.02, decision: 'Admis', comment: 'Assez bien.' },
      { studentId: '22', studentName: 'Moustapha ', class: 'Seconde S2', period: 'Semestre 2', average: 8.61, decision: 'Redouble', comment: 'Faible.' },
      { studentId: '23', studentName: 'Radia ', class: 'Seconde S2', period: 'Semestre 2', average: 12, decision: 'Admis', comment: 'Bien.' },
      { studentId: '24', studentName: 'Djilly ', class: 'Seconde S2', period: 'Semestre 2', average: 15.2, decision: 'Admis', comment: 'Trés bien.' },
      { studentId: '25', studentName: 'Rama ', class: 'Seconde S2', period: 'Semestre 2', average: 12.32, decision: 'Admis', comment: 'Bien.' },
      { studentId: '26', studentName: 'Aminata ', class: 'Seconde S2', period: 'Semestre 2', average: 11.2, decision: 'Admis', comment: 'bien.' },
      { studentId: '27', studentName: 'Diouma ', class: 'Seconde S2', period: 'Semestre 2', average: 15, decision: 'Admis', comment: 'Trés bien.' },
      { studentId: '28', studentName: 'Ablaye', class: 'Seconde S2', period: 'Semestre 2', average: 15.1, decision: 'Admis', comment: 'Excellent travail.' },
      { studentId: '29', studentName: 'Ndeye Maty', class: 'Seconde S2', period: 'Semestre 2', average: 10.1, decision: 'Passage conditionnel', comment: 'Des efforts sont nécessaires en math.'},
      { studentId: '30', studentName: 'Doudou Ndoye', class: 'Seconde S2', period: 'Semestre 2', average: 7.98, decision: 'Redouble', comment: 'Faible,' },
      { studentId: '31', studentName: 'Fatou Diouf', class: 'Seconde S2', period: 'Semestre 2', average: 12, decision: 'Admis', comment: 'Bien,' },
      { studentId: '32', studentName: 'Bamba Sylla', class: 'Seconde S2', period: 'Semestre 2', average: 10, decision: 'Admis', comment: 'Assez bien,' },
      { studentId: '33', studentName: 'Nafissatou', class: 'Seconde S2', period: 'Semestre 2', average: 14, decision: 'Admis', comment: 'Trés Bien,' },
      { studentId: '34', studentName: 'Daouda', class: 'Seconde S2', period: 'Semestre 2', average: 11, decision: 'Admis', comment: 'Passable,' },
        
     //premiere S2 semestre 1
     { studentId: '9', studentName: 'Ablaye Ba', class: 'Première S2', period: 'Semestre 1', average: 15.1, decision: 'Admis', comment: 'Excellent travail.' },
      { studentId: '10', studentName: 'Ndeye Maty', class: 'Première S2', period: 'Semestre 1', average: 10.1, decision: 'Passage conditionnel', comment: 'Des efforts sont nécessaires en espagnol.'},
      { studentId: '11', studentName: 'Samba Ngom', class: 'Première S2', period: 'Semestre 1', average: 8.98, decision: 'Redouble', comment: 'Faible,' },
      { studentId: '12', studentName: 'Faty Seye', class: 'Première S2', period: 'Semestre 1', average: 13, decision: 'Admis', comment: 'Bien,' },
      { studentId: '12', studentName: 'Bamba Ndour', class: 'Première S2', period: 'Semestre 1', average: 11, decision: 'Admis', comment: 'Assez bien,' },
      { studentId: '13', studentName: 'Nafissatou Sy', class: 'Première S2', period: 'Semestre 1', average: 15, decision: 'Admis', comment: 'Trés Bien,' },
      { studentId: '14', studentName: 'Daouda Faye', class: 'Première S2', period: 'Semestre 1', average: 11, decision: 'Admis', comment: 'Passable,' },
      

      //premiere S2 semestre 2

      { studentId: '27', studentName: 'Diouma ', class: 'Première S2', period: 'Semestre 2', average: 15, decision: 'Admis', comment: 'Trés bien.' },
      { studentId: '28', studentName: 'Ablaye', class: 'Première S2', period: 'Semestre 2', average: 15.1, decision: 'Admis', comment: 'Excellent travail.' },
      { studentId: '29', studentName: 'Ndeye Maty', class: 'Première S2', period: 'Semestre 2', average: 10.1, decision: 'Passage conditionnel', comment: 'Des efforts sont nécessaires en PC.'},
      { studentId: '30', studentName: 'Doudou Ndoye', class: 'Première S2', period: 'Semestre 2', average: 7.98, decision: 'Redouble', comment: 'Faible,' },
      { studentId: '31', studentName: 'Fatou Diouf', class: 'Première S2', period: 'Semestre 2', average: 12, decision: 'Admis', comment: 'Bien,' },
      { studentId: '32', studentName: 'Bamba Sylla', class: 'Première S2', period: 'Semestre 2', average: 10, decision: 'Admis', comment: 'Assez bien,' },
      { studentId: '33', studentName: 'Nafissatou', class: 'Première S2', period: 'Semestre 2', average: 14, decision: 'Admis', comment: 'Trés Bien,' },
      { studentId: '34', studentName: 'Daouda', class: 'Première S2', period: 'Semestre 2', average: 11, decision: 'Admis', comment: 'Passable,' },
  
     //Terminal S2 semestre 1
       { studentId: '9', studentName: 'Ablaye Ba', class: 'Terminale S2', period: 'Semestre 1', average: 15.1, decision: 'Admis', comment: 'Excellent travail.' },
      { studentId: '10', studentName: 'Ndeye Maty', class: 'Terminale S2', period: 'Semestre 1', average: 10.1, decision: 'Passage conditionnel', comment: 'Des efforts sont nécessaires en Français.'},
      { studentId: '11', studentName: 'Samba Ngom', class: 'Terminale S2', period: 'Semestre 1', average: 8.98, decision: 'Redouble', comment: 'Faible,' },
      { studentId: '12', studentName: 'Faty Seye', class: 'Terminale S2', period: 'Semestre 1', average: 13, decision: 'Admis', comment: 'Bien,' },
      { studentId: '12', studentName: 'Bamba Ndour', class: 'Terminale S2', period: 'Semestre 1', average: 11, decision: 'Admis', comment: 'Assez bien,' },
      { studentId: '13', studentName: 'Nafissatou Sy', class: 'Terminale S2', period: 'Semestre 1', average: 15, decision: 'Admis', comment: 'Trés Bien,' },
      { studentId: '14', studentName: 'Daouda Faye', class: 'Terminale S2', period: 'Semestre 1', average: 11, decision: 'Admis', comment: 'Passable,' },
      

     //Terminal S2 semestre 2
      { studentId: '27', studentName: 'Diouma ', class: 'Terminale S2', period: 'Semestre 2', average: 15, decision: 'Admis', comment: 'Trés bien.' },
      { studentId: '28', studentName: 'Ablaye', class: 'Terminale S2', period: 'Semestre 2', average: 15.1, decision: 'Admis', comment: 'Excellent travail.' },
      { studentId: '29', studentName: 'Ndeye Maty', class: 'Terminale S2', period: 'Semestre 2', average: 10.1, decision: 'Passage conditionnel', comment: 'Des efforts sont nécessaires en SVT.'},
      { studentId: '30', studentName: 'Doudou Ndoye', class: 'Terminale S2', period: 'Semestre 2', average: 7.98, decision: 'Redouble', comment: 'Faible,' },
      { studentId: '31', studentName: 'Fatou Diouf', class: 'Terminale S2', period: 'Semestre 2', average: 12, decision: 'Admis', comment: 'Bien,' },
      { studentId: '32', studentName: 'Bamba Sylla', class: 'Terminale S2', period: 'Semestre 2', average: 10, decision: 'Admis', comment: 'Assez bien,' },
      { studentId: '33', studentName: 'Nafissatou', class: 'Terminale S2', period: 'Semestre 2', average: 14, decision: 'Admis', comment: 'Trés Bien,' },
      { studentId: '34', studentName: 'Daouda', class: 'Terminale S2', period: 'Semestre 2', average: 11, decision: 'Admis', comment: 'Passable,' },
  
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