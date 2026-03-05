import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  // Cette méthode DOIT exister avec ce nom exact
  addUser(membres: any): Observable<any> {
    return this.http.post('http://localhost/api/index.php', membres);
  }

  // Ajoute aussi celle-là pour que loadMembres() fonctionne
  getMembres(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/api/index.php');
  }
}