import { Injectable, inject } from '@angular/core';
import { 
  Firestore, 
  collection, 
  collectionData, 
  doc, 
  addDoc, 
  deleteDoc, 
  updateDoc, 
  DocumentReference 
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface IData {
  id?: string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // 1. Injection moderne pour éviter l'erreur de contexte Firebase
  private firestore: Firestore = inject(Firestore);

  constructor() {}

  // --- MÉTHODES DE SIMULATION (Pour l'interface Enseignant) ---

  getClassesDuJour(): any[] {
    return [
      { heure: '08:00', matiere: 'Maths', nomClasse: '6ème A', salle: '101' },
      { heure: '10:00', matiere: 'Français', nomClasse: '5ème C', salle: '102' },
    ];
  }

  getEvaluationsEnAttente(): any[] {
    return []; 
  }

  // --- MÉTHODES FIREBASE RÉELLES ---

  // Récupérer les élèves (Dashboard Admin)
  getEleves(): Observable<any[]> {
    const elevesRef = collection(this.firestore, 'eleves');
    return collectionData(elevesRef, { idField: 'id' });
  }

  // Saisie des notes (Enseignant)
  async enregistrerNotes(evaluationId: string, notes: any) {
    const evalRef = doc(this.firestore, `evaluations/${evaluationId}`);
    return updateDoc(evalRef, { notes: notes, dateSaisie: new Date() });
  }

  // --- MÉTHODES GÉNÉRIQUES (CRUD) ---

  getData<T extends IData>(collectionName: string): Observable<T[]> {
    const collectionRef = collection(this.firestore, collectionName);
    return collectionData(collectionRef, { idField: 'id' }) as Observable<T[]>;
  }

  async addData(collectionName: string, data: IData): Promise<DocumentReference> {
    const collectionRef = collection(this.firestore, collectionName);
    return await addDoc(collectionRef, data);
  }

  async updateData(collectionName: string, id: string, data: Partial<IData>): Promise<void> {
    const docRef = doc(this.firestore, collectionName, id);
    return await updateDoc(docRef, data);
  }

  async deleteData(collectionName: string, id: string): Promise<void> {
    const docRef = doc(this.firestore, collectionName, id);
    return await deleteDoc(docRef);
  }
}