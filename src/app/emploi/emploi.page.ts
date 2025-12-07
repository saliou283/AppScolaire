import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

interface Lesson {
  day: string;
  hour: string;
  subject: string;
  teacherId: string;
  teacherName: string;
  classId: string;
  className: string;
  room: string;
  type: 'Cours' | 'TD' | 'TP';
}

interface TeacherOption {
  id: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.page.html',
  styleUrls: ['./emploi.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,]
})
export class EmploiPage implements OnInit {

  allLessons: Lesson[] = [];
  timetable: Lesson[] = []; 
  selectedView: 'class' | 'teacher' = 'class';
  selectedClass: string = '';
  selectedTeacher: string = '';

  daysOfWeek: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  hoursOfDay: string[] = ['08:00-10:00', '10:00-12:00', '12:00-14:00'];

  availableClasses: string[] = ['Seconde', 'Première', 'Terminale'];
  availableTeachers: TeacherOption[] = [
    { id: 't1', firstName: 'Madame', lastName: 'Ba' },
    { id: 't2', firstName: 'Monsieur', lastName: 'Ndiaye' }
  ];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.loadAllLessons();
  }

  loadAllLessons() {
    this.allLessons = [
      /*SECOND*/
      { day: 'Lundi', hour: '08:00-10:00', subject: 'Français', teacherId: 't1', teacherName: 'M Ndiaye', classId: 'cls1', className: 'Seconde', room: 'A8', type: 'Cours' },
      { day: 'Mardi', hour: '08:00-10:00', subject: 'Math', teacherId: 't1', teacherName: 'M Faye', classId: 'cls1', className: 'Seconde', room: 'B1', type: 'Cours' },
      { day: 'Mercredi', hour: '08:00-10:00', subject: 'SVT', teacherId: 't1', teacherName: 'Mdm Ndiaye', classId: 'cls1', className: 'Seconde', room: 'B4', type: 'Cours' },
    //{ day: 'Jeudi', hour: '08:00-10:00', subject: 'Espagnol', teacherId: 't2', teacherName: 'Mdm Sene', classId: 'cls2', className: 'Seconde', room: 'C4', type: 'Cours' },
      { day: 'Vendredi', hour: '08:00-10:00', subject: 'Français', teacherId: 't1', teacherName: 'M Ndiaye', classId: 'cls1', className: 'Seconde', room: 'A8 ', type: 'Cours' },
      { day: 'Samedi', hour: '08:00-10:00', subject: 'Anglais', teacherId: 't1', teacherName: 'Mdm Mbaye', classId: 'cls1', className: 'Seconde', room: 'A5', type: 'Cours' },
       
    //{ day: 'Lundi', hour: '10:00-12:00', subject: 'Philo', teacherId: 't1', teacherName: 'M Sarr', classId: 'cls1', className: 'Seconde', room: 'E10t', type: 'Cours' },
      { day: 'Mardi', hour: '10:00-12:00', subject: 'Espagnol', teacherId: 't1', teacherName: 'Mdm Sene', classId: 'cls1', className: 'Seconde', room: 'C4', type: 'Cours' },
      { day: 'Mercredi', hour: '10:00-12:00', subject: 'Français', teacherId: 't1', teacherName: 'M Ndiaye', classId: 'cls1', className: 'Seconde', room: 'A8', type: 'Cours' },
      { day: 'Jeudi', hour: '10:00-12:00', subject: 'PC', teacherId: 't1', teacherName: 'M Diaw', classId: 'cls1', className: 'Seconde', room: 'A5', type: 'Cours' },
      { day: 'Vendredi', hour: '10:00-12:00', subject: 'Anglais', teacherId: 't1', teacherName: 'Mdm Mbaye', classId: 'cls1', className: 'Seconde', room: 'A5', type: 'Cours' },
      { day: 'Samedi', hour: '10:00-12:00', subject: 'SVT', teacherId: 't1', teacherName: 'Mdm Ndiaye', classId: 'cls1', className: 'Seconde', room: 'B4', type: 'Cours' },
      
      { day: 'Lundi', hour: '12:00-14:00', subject: 'Anglais', teacherId: 't1', teacherName: 'Mdm Mbaye', classId: 'cls1', className: 'Seconde', room: 'A5', type: 'Cours' },
      { day: 'Mardi', hour: '12:00-14:00', subject: 'SVT', teacherId: 't1', teacherName: 'Mdm Ndiaye', classId: 'cls1', className: 'Seconde', room: 'C4', type: 'Cours' },
    //{ day: 'Mercredi', hour: '12:00-14:00', subject: 'Philo', teacherId: 't1', teacherName: 'M Sarr', classId: 'cls1', className: 'Seconde', room: 'E10', type: 'Cours' },
      { day: 'Jeudi', hour: '12:00-14:00', subject: 'Espagnol', teacherId: 't1', teacherName: 'Mdm Sene', classId: 'cls1', className: 'Seconde', room: 'C4', type: 'Cours' },
    //{ day: 'Vendredi', hour: '12:00-14:00', subject: 'Philo', teacherId: 't1', teacherName: 'M Sarr', classId: 'cls1', className: 'Seconde', room: 'E10', type: 'Cours' },
      { day: 'Samedi', hour: '12:00-14:00', subject: 'Math', teacherId: 't1', teacherName: 'M Faye', classId: 'cls1', className: 'Seconde', room: 'B1', type: 'Cours' },
      
       /*PREMIERE*/

      { day: 'Lundi', hour: '08:00-10:00', subject: 'Anglais', teacherId: 't1', teacherName: 'Aminata Ba', classId: 'cls1', className: 'Première', room: 'Moodle', type: 'TD' },
    //{ day: 'Mardi', hour: '08:00-10:00', subject: 'Math', teacherId: 't1', teacherName: 'Aminata Ba', classId: 'cls1', className: 'Première', room: 'Moodle', type: 'TD' },
      { day: 'Mercredi', hour: '08:00-10:00', subject: 'Espagnol', teacherId: 't2', teacherName: 'Serigne Badiane', classId: 'cls2', className: 'Première', room: 'Zoom', type: 'Cours' },
      { day: 'Jeudi', hour: '08:00-10:00', subject: 'SVT', teacherId: 't1', teacherName: 'Serigne Badiane', classId: 'cls2', className: 'Première', room: 'Zoom', type: 'Cours' },
      { day: 'Vendredi', hour: '08:00-10:00', subject: 'Français', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Première', room: 'Meet', type: 'TD' },
      { day: 'Samedi', hour: '08:00-10:00', subject: 'Math', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Première', room: 'Meet', type: 'TD' },
      
      { day: 'Lundi', hour: '10:00-12:00', subject: 'Français', teacherId: 't1', teacherName: 'Aminata Ba', classId: 'cls1', className: 'Première', room: 'Moodle', type: 'TD' },
      { day: 'Mardi', hour: '10:00-12:00', subject: 'Math', teacherId: 't1', teacherName: 'Aminata Ba', classId: 'cls1', className: 'Première', room: 'Moodle', type: 'TD' },
      { day: 'Mercredi', hour: '10:00-12:00', subject: 'Anglais', teacherId: 't2', teacherName: 'Serigne Badiane', classId: 'cls2', className: 'Première', room: 'Zoom', type: 'Cours' },
    //{ day: 'Jeudi', hour: '10:00-12:00', subject: 'Droit Cons', teacherId: 't1', teacherName: 'Serigne Badiane', classId: 'cls2', className: 'Première', room: 'Zoom', type: 'Cours' },
      { day: 'Vendredi', hour: '10:00-12:00', subject: 'SVT', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Première', room: 'Meet', type: 'TD' },
      { day: 'Samedi', hour: '10:00-12:00', subject: 'Espagnol', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Première', room: 'Meet', type: 'TD' },
      
    //{ day: 'Lundi', hour: '12:00-14:00', subject: 'SVT', teacherId: 't1', teacherName: 'Aminata Ba', classId: 'cls1', className: 'Première', room: 'Moodle', type: 'TD' },
      { day: 'Mardi', hour: '12:00-14:00', subject: 'Français', teacherId: 't1', teacherName: 'Aminata Ba', classId: 'cls1', className: 'Première', room: 'Moodle', type: 'TD' },
    //{ day: 'Mercredi', hour: '12:00-14:00', subject: '', teacherId: 't2', teacherName: 'Serigne Badiane', classId: 'cls2', className: 'Première', room: 'Zoom', type: 'Cours' },
      { day: 'Jeudi', hour: '12:00-14:00', subject: 'SVT', teacherId: 't1', teacherName: 'Serigne Badiane', classId: 'cls2', className: 'Première', room: 'Zoom', type: 'Cours' },
      { day: 'Vendredi', hour: '12:00-14:00', subject: 'Math', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Première', room: 'Meet', type: 'TD' },
      { day: 'Samedi', hour: '12:00-14:00', subject: 'Anglais', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Première', room: 'Meet', type: 'TD' },
      
      /*TERMINALE*/
      { day: 'Lundi', hour: '08:00-10:00', subject: 'PC', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
      { day: 'Mardi', hour: '08:00-10:00', subject: 'Anglais', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
    //{ day: 'Mercredi', hour: '08:00-10:00', subject: 'Cmmunication', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
      { day: 'Jeudi', hour: '08:00-10:00', subject: 'SVT', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
      { day: 'Vendredi', hour: '08:00-10:00', subject: 'Français', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
      { day: 'Samedi', hour: '08:00-10:00', subject: 'Espagnol', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
      
    //{ day: 'Lundi', hour: '10:00-12:00', subject: 'Espagnol', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
      { day: 'Mardi', hour: '10:00-12:00', subject: 'SVT', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
      { day: 'Mercredi', hour: '10:00-12:00', subject: 'Math', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
      { day: 'Jeudi', hour: '10:00-12:00', subject: 'Anglais', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
    //{ day: 'Vendredi', hour: '10:00-12:00', subject: 'Cmmunication', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
      { day: 'Samedi', hour: '10:00-12:00', subject: 'Français', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
      
      { day: 'Lundi', hour: '12:00-14:00', subject: 'PC', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
      { day: 'Mardi', hour: '12:00-14:00', subject: 'Espagnol', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
      { day: 'Mercredi', hour: '12:00-14:00', subject: 'SVT', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
      { day: 'Jeudi', hour: '12:00-14:00', subject: 'Anglais', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
      { day: 'Vendredi', hour: '12:00-14:00', subject: 'Math', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
    //{ day: 'Samedi', hour: '12:00-14:00', subject: 'Cmmunication', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'Terminale', room: 'Meet', type: 'TD' },
      
    ];
  }

  changeView() {
    this.selectedClass = '';
    this.selectedTeacher = '';
    this.timetable = [];
  }

  loadTimetable() {
    if (this.selectedView === 'class' && this.selectedClass) {
      this.timetable = this.allLessons.filter(lesson => lesson.className === this.selectedClass);
    } else if (this.selectedView === 'teacher' && this.selectedTeacher) {
      this.timetable = this.allLessons.filter(lesson => lesson.teacherId === this.selectedTeacher);
    } else {
      this.timetable = [];
    }
  }

  getLesson(day: string, hour: string): Lesson | undefined {
    return this.timetable.find(lesson => lesson.day === day && lesson.hour === hour);
  }

  async openManageTimetableModal() {
    console.log('Ouvrir la modale de gestion des emplois du temps');
    alert('Fonctionnalité de gestion des emplois du temps (création/modification) à implémenter.');
  }
}