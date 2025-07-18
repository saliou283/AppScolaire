import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.page.html', 
  styleUrls: ['./absence.page.scss'], 
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule 
  ]
})
export class AbsencePage implements OnInit {

  
  selectedClass: string = ''; 
  selectedDate: string = new Date().toISOString().slice(0, 10); 
  students: any[] = [
    { name: 'Awa Faye', status: 'present', justified: false, reason: '' },
    { name: 'Awa Faye (2)', status: 'present', justified: false, reason: '' },
    { name: 'Awa Faye (3)', status: 'present', justified: false, reason: '' },
    { name: 'Awa Faye (4)', status: 'present', justified: false, reason: '' },
    { name: 'Awa Faye (5)', status: 'present', justified: false, reason: '' },
    { name: 'Ngor Diouf', status: 'present', justified: false, reason: '' },
    { name: 'Fallou Sene', status: 'absent', justified: true, reason: 'Maladie' }
  ];
  selectedStudentForHistory: string = ''; 

  allAbsenceHistory: any[] = [
    { studentId: '1', studentName: 'Dupont Jean', date: '2025-06-28', subject: 'Mathématiques (8h-10h)', status: 'Absent', reason: 'Maladie' },
    { studentId: '1', studentName: 'Dupont Jean', date: '2025-06-20', subject: 'Physique (14h-16h)', status: 'Présent', reason: '' },
    { studentId: '2', studentName: 'Martin Sophie', date: '2025-06-27', subject: 'Chimie (10h-12h)', status: 'Absent', reason: 'Rendez-vous médical' },
    { studentId: '2', studentName: 'Martin Sophie', date: '2025-06-25', subject: 'Histoire (9h-11h)', status: 'Présent', reason: '' },
  ];
  
  filteredAbsenceHistory: any[] = [];

  constructor(private router: Router) { } 

  ngOnInit() {
    
    this.updateAbsenceHistory(); 
  }
  
  onStatusChange(student: any, status: 'present' | 'absent') {
    student.status = status;
    if (status === 'present') {
      student.reason = ''; 
      student.justified = false; 
    }
  }

  onJustifiedChange(student: any) {
   if (student.status === 'present') {
      student.justified = false; 
    }
  }

  
  saveAbsences() {
    console.log('Absences à enregistrer:', this.students);
    alert('Absences enregistrées avec succès ! (Simulé)');
  }

 
  updateAbsenceHistory() {
    if (this.selectedStudentForHistory) {
      const selectedStudent = this.allAbsenceHistory.find(
        historyItem => historyItem.studentId === this.selectedStudentForHistory
      );

      if (selectedStudent) {
        this.filteredAbsenceHistory = this.allAbsenceHistory.filter(
          item => item.studentName === selectedStudent.studentName
        );
      } else {
        this.filteredAbsenceHistory = [];
      }
    } else {
      this.filteredAbsenceHistory = []; 
    }
    console.log('Historique filtré:', this.filteredAbsenceHistory);
  }

  goBackToHome() {
    this.router.navigate(['/home']);
  }
}