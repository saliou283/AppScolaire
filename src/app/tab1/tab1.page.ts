import { Component, OnInit } from '@angular/core';

interface Student {
  id: number;
  nom: string;
  prenom: string;
  classe: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  students: Student[] = [];
  newStudent: Student = { id: 0, nom: '', prenom: '', classe: '' };
  nextId: number = 0; // Pour générer des IDs uniques

  constructor() { }

  ngOnInit() {
    this.loadStudents(); // Charger les étudiants au démarrage de la page
  }

  addStudent() {
    if (this.newStudent.nom && this.newStudent.prenom && this.newStudent.classe) {
      this.newStudent.id = this.nextId++;
      this.students.push({ ...this.newStudent }); // Ajout d'une copie pour éviter les références
      this.saveStudents();
      this.clearNewStudentForm();
    } else {
      // Afficher une alerte ou un toast pour indiquer les champs manquants
      console.log("Veuillez remplir tous les champs.");
    }
  }

  deleteStudent(studentToDelete: Student) {
    this.students = this.students.filter(student => student.id !== studentToDelete.id);
    this.saveStudents();
  }

  // --- Fonctions pour la persistance des données (exemple avec localStorage) ---
  private saveStudents() {
    localStorage.setItem('students', JSON.stringify(this.students));
    localStorage.setItem('nextStudentId', this.nextId.toString());
  }

  private loadStudents() {
    const storedStudents = localStorage.getItem('students');
    const storedNextId = localStorage.getItem('nextStudentId');
    if (storedStudents) {
      this.students = JSON.parse(storedStudents);
    }
    if (storedNextId) {
      this.nextId = parseInt(storedNextId, 10);
    } else if (this.students.length > 0) {
        // Fallback: si nextId n'est pas stocké, le calculer à partir des IDs existants
        this.nextId = Math.max(...this.students.map(s => s.id)) + 1;
    }
  }

  private clearNewStudentForm() {
    this.newStudent = { id: 0, nom: '', prenom: '', classe: '' };
  }
}