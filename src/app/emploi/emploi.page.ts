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
  timetable: Lesson[] = []; // Le sous-ensemble filtré pour l'affichage
  selectedView: 'class' | 'teacher' = 'class';
  selectedClass: string = '';
  selectedTeacher: string = '';

  daysOfWeek: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
  hoursOfDay: string[] = ['08:00-09:00', '09:00-10:00', '10:00-11:00', '11:00-12:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00'];

  availableClasses: string[] = ['IDA', 'MIC', 'CD', 'SJ', 'AES'];
  availableTeachers: TeacherOption[] = [
    { id: 't1', firstName: 'Aminata', lastName: 'Ba' },
    { id: 't2', firstName: 'Abdou Khare', lastName: 'Ndiaye' }
  ];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.loadAllLessons();
  }

  loadAllLessons() {
    // Données fictives pour tous les emplois du temps
    this.allLessons = [
      { day: 'Lundi', hour: '08:00-09:00', subject: 'Programation', teacherId: 't1', teacherName: 'Addou Khadre Ndiaye', classId: 'cls1', className: 'IDA', room: 'Google Meet', type: 'Cours' },
      { day: 'Lundi', hour: '09:00-10:00', subject: 'Communication', teacherId: 't1', teacherName: 'Aminata Ba', classId: 'cls1', className: 'CD', room: 'Moodle', type: 'TD' },
      { day: 'Mardi', hour: '10:00-11:00', subject: 'Droit Cons', teacherId: 't2', teacherName: 'Serigne Badiane', classId: 'cls2', className: 'SJ', room: 'Zoom', type: 'Cours' },
      { day: 'Lundi', hour: '08:00-09:00', subject: 'Algprithme', teacherId: 't2', teacherName: 'Anta Diaw', classId: 'cls2', className: 'IDA', room: 'Meet', type: 'Cours' },
      { day: 'Mercredi', hour: '14:00-15:00', subject: 'Droit Cons', teacherId: 't1', teacherName: 'Serigne Badiane', classId: 'cls2', className: 'SJ', room: 'Zoom', type: 'Cours' },
      { day: 'Jeudi', hour: '13:00-14:00', subject: 'Cmmunication', teacherId: 't3', teacherName: 'Moussa Ndiaye', classId: 'cls1', className: 'CD', room: 'Meet', type: 'TD' },
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