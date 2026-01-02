// src/app/emploi/emploi.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor, NgClass } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, 
  IonButton, IonIcon, IonContent, ModalController, AlertController 
} from '@ionic/angular/standalone';
import { TimetableService } from '../services/timetable.service'; 
import { DataService } from '../services/data.service'; // Utilisé pour les listes de classes/profs

// -------------------------------------------------------------
// INTERFACES DE DONNÉES (Structure Firestore)
// -------------------------------------------------------------
export interface ILesson {
  id?: string;
  class: string;      // Ex: "Seconde A"
  teacherId: string;  // ID de l'enseignant (Ex: T001)
  subject: string;    // Matière (Ex: "Mathématiques")
  type: 'Cours' | 'TD' | 'TP'; 
  room: string;       // Salle (Ex: "S105")
  day: string;        // Jour (Ex: "Lundi")
  hour: string;       // Heure (Ex: "08:00 - 09:00")
}

export interface ITeacherOption {
  id: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.page.html',
  styleUrls: ['./emploi.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf, NgFor, NgClass, 
    // Composants Ionic
    IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, 
    IonButton, IonIcon, IonContent,
  ],
  providers: [
    TimetableService, 
    DataService,
    ModalController,
    AlertController
  ]
})
export class EmploiPage implements OnInit { 
  
  // Modèles pour les sélecteurs
  selectedView: 'class' | 'teacher' = 'class';
  selectedClass: string = '';
  selectedTeacher: string = '';

  // Données de filtre
  availableClasses: string[] = []; 
  availableTeachers: ITeacherOption[] = []; 

  // Emploi du temps enrichi (avec teacherName)
  timetable: (ILesson & { teacherName: string })[] = []; 

  // Structure du tableau pour le Lycée
  daysOfWeek: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
  hoursOfDay: string[] = [
    '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', 
    '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00'
  ];
  
  constructor(
    private timetableService: TimetableService,
    private dataService: DataService, 
    private modalController: ModalController
  ) {}

  async ngOnInit() {
    await this.loadAvailableFilters();
  }

  // -------------------------------------------------------------
  // LOGIQUE DE FILTRAGE ET CHARGEMENT
  // -------------------------------------------------------------

  async loadAvailableFilters() {
    try {
      // ⚠️ Remplacer par un appel réel à votre DataService pour les listes
      this.availableClasses = ['Seconde A', 'Première S', 'Terminale L', 'Terminale ES'];
      this.availableTeachers = [
        { id: 'T001', firstName: 'M.', lastName: 'Diawara' },
        { id: 'T002', firstName: 'Mme', lastName: 'Gueye' },
      ];
    } catch (error) {
      console.error('Erreur lors du chargement des filtres :', error);
    }
  }

  async loadTimetable() {
    this.timetable = [];
    let filterValue = '';
    let filterKey: 'class' | 'teacherId';

    if (this.selectedView === 'class' && this.selectedClass) {
      filterKey = 'class';
      filterValue = this.selectedClass;
    } else if (this.selectedView === 'teacher' && this.selectedTeacher) {
      filterKey = 'teacherId';
      filterValue = this.selectedTeacher;
    } else {
      return; 
    }

    try {
      // 1. Récupération des données brutes filtrées
      const rawTimetable: ILesson[] = await this.timetableService.getTimetable(filterKey, filterValue);
      
      // 2. Enrichissement (Jointure) des données avec le nom de l'enseignant (voir Option 2 de la correction précédente)
      this.timetable = rawTimetable.map(lesson => ({
        ...lesson,
        teacherName: this.getTeacherName(lesson.teacherId) // Ajout de la propriété teacherName
      }));
      
    } catch (error) {
      console.error('Erreur lors du chargement de l\'emploi du temps :', error);
    }
  }

  changeView() {
    this.selectedClass = '';
    this.selectedTeacher = '';
    this.timetable = [];
  }

  // -------------------------------------------------------------
  // LOGIQUE D'AFFICHAGE ET UTILITAIRES
  // -------------------------------------------------------------
  
  getTeacherName(teacherId: string): string {
    const teacher = this.availableTeachers.find(t => t.id === teacherId);
    return teacher ? `${teacher.firstName} ${teacher.lastName}` : 'Inconnu';
  }

  getLesson(day: string, hour: string): (ILesson & { teacherName: string }) | null {
    return this.timetable.find(
      lesson => lesson.day === day && lesson.hour === hour
    ) || null;
  }
  
  async openManageTimetableModal() {
    // Logique pour ouvrir une modale d'administration (CRUD)
    alert("Fonctionnalité d'administration à implémenter.");
  }
}