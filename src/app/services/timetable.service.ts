// src/app/services/timetable.service.ts

import { Injectable } from '@angular/core';
import { 
  Firestore, 
  collection, 
  collectionData, 
  query, 
  where, 
  QueryConstraint 
} from '@angular/fire/firestore';
import { Observable, lastValueFrom } from 'rxjs';
import { IData } from './data.service';
import { ILesson } from '../emploi/emploi.page';




@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  
  // 1. ✅ CORRECTION : Déclaration de la propriété Firestore au niveau de la classe.
  private firestore: Firestore; // Utilisation du "definite assignment assertion" ou !

  private readonly COLLECTION_NAME = 'timetables';

  // 2. Injection via le constructeur (le contexte est garanti)
  constructor(firestore: Firestore) {
    // Attribution de l'instance de Firestore à la propriété déclarée ci-dessus.
    this.firestore = firestore; 
  }
 getData<T extends IData>(collectionName: string): Observable<T[]> {
    const collectionRef = collection(this.firestore, collectionName);
    return collectionData(collectionRef, { idField: 'id' }) as Observable<T[]>;
  }
  /**
   * 🎯 Récupère l'emploi du temps filtré par une clé et une valeur.
   * @param filterKey La clé du champ Firestore à filtrer ('class' ou 'teacherId').
   * @param filterValue La valeur correspondante à rechercher.
   * @returns Une Promise qui résout à un tableau de leçons (ILesson[]).
   */
  async getTimetable(
    filterKey: 'class' | 'teacherId', 
    filterValue: string
  ): Promise<ILesson[]> {
    
    // 1. Référence à la collection 'timetables'
    const timetableCollection = collection(this.firestore, this.COLLECTION_NAME);
    
    // 2. Création de la contrainte de requête : WHERE filterKey = filterValue
    const constraint: QueryConstraint = where(filterKey, '==', filterValue);

    // 3. Construction de la requête Firestore
    const q = query(
      timetableCollection, 
      constraint 
    );
    
    // 4. Exécution de la requête et conversion du résultat Observable en Promise.
    const timetable$ = collectionData(q, { idField: 'id' }) as Observable<ILesson[]>;
    
    return lastValueFrom(timetable$);
  }
}