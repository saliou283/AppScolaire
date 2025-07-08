import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for ngModel two-way data binding
import { IonicModule } from '@ionic/angular'; // For Ionic components
import { Router } from '@angular/router'; // For navigation (e.g., back button if needed elsewhere)

@Component({
  selector: 'app-absence', // Your component's selector
  templateUrl: './absence.page.html', // Link to your HTML file
  styleUrls: ['./absence.page.scss'], // Link to your SCSS file
  standalone: true, // Mark as standalone
  imports: [
    IonicModule, // Essential for Ionic components
    CommonModule, // For NgFor, NgIf etc.
    FormsModule // Essential for ngModel (two-way data binding on form elements)
  ]
})
export class AbsencePage implements OnInit {

  // --- Properties for "Marquer les Absences" Tab ---
  selectedClass: string = ''; // Holds the selected class value
  selectedDate: string = new Date().toISOString().slice(0, 10); // Default to today's date (YYYY-MM-DD)

  // Example student data with initial absence status
  students: any[] = [
    { name: 'Awa Faye', status: 'present', justified: false, reason: '' },
    { name: 'Awa Faye (2)', status: 'present', justified: false, reason: '' },
    { name: 'Awa Faye (3)', status: 'present', justified: false, reason: '' },
    { name: 'Awa Faye (4)', status: 'present', justified: false, reason: '' },
    { name: 'Awa Faye (5)', status: 'present', justified: false, reason: '' },
    { name: 'Ngor Diouf', status: 'present', justified: false, reason: '' },
    { name: 'Fallou Sene', status: 'absent', justified: true, reason: 'Maladie' }
  ];

  // --- Properties for "Historique des Absences" Tab ---
  selectedStudentForHistory: string = ''; // Holds the selected student for history
  
  // Example absence history data (could be fetched from a service)
  // This will be filtered based on selectedStudentForHistory
  allAbsenceHistory: any[] = [
    { studentId: '1', studentName: 'Dupont Jean', date: '2025-06-28', subject: 'Mathématiques (8h-10h)', status: 'Absent', reason: 'Maladie' },
    { studentId: '1', studentName: 'Dupont Jean', date: '2025-06-20', subject: 'Physique (14h-16h)', status: 'Présent', reason: '' },
    { studentId: '2', studentName: 'Martin Sophie', date: '2025-06-27', subject: 'Chimie (10h-12h)', status: 'Absent', reason: 'Rendez-vous médical' },
    { studentId: '2', studentName: 'Martin Sophie', date: '2025-06-25', subject: 'Histoire (9h-11h)', status: 'Présent', reason: '' },
  ];
  
  // Filtered history for the currently selected student
  filteredAbsenceHistory: any[] = [];

  constructor(private router: Router) { } // Inject Router for potential navigation

  ngOnInit() {
    // Optionally load initial data or perform setup here
    this.updateAbsenceHistory(); // Initialize history based on default selection (or no selection)
  }

  // --- Methods for "Marquer les Absences" Tab ---

  /**
   * Called when a student's presence status changes.
   * Updates the student object and clears the reason if present.
   * @param student The student object to update.
   * @param status The new status ('present' or 'absent').
   */
  onStatusChange(student: any, status: 'present' | 'absent') {
    student.status = status;
    if (status === 'present') {
      student.reason = ''; // Clear reason if marked present
      student.justified = false; // Also uncheck justified if present
    }
  }

  /**
   * Handles the checkbox for justification.
   * @param student The student object.
   */
  onJustifiedChange(student: any) {
    // If student is marked present, justified checkbox should be ignored or disabled in UI.
    // Logic here ensures it's only relevant if absent.
    if (student.status === 'present') {
      student.justified = false; // Cannot be justified if present
    }
  }

  /**
   * Saves the marked absences. In a real app, this would send data to a backend.
   */
  saveAbsences() {
    console.log('Absences à enregistrer:', this.students);
    // Here you would typically send this.students data to an API
    // Example: this.absenceService.saveAbsences(this.students).subscribe(...);
    alert('Absences enregistrées avec succès ! (Simulé)');
  }

  // --- Methods for "Historique des Absences" Tab ---

  /**
   * Updates the filtered absence history when a student is selected.
   */
  updateAbsenceHistory() {
    if (this.selectedStudentForHistory) {
      // Find the selected student's name based on their ID from the dropdown
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
      this.filteredAbsenceHistory = []; // Clear if no student is selected
    }
    console.log('Historique filtré:', this.filteredAbsenceHistory);
  }

  /**
   * Navigates back to the home page (example, already handled by ion-back-button).
   */
  goBackToHome() {
    this.router.navigate(['/home']);
  }
}