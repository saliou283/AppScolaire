import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon,IonBackButton   } from '@ionic/angular/standalone';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.page.html',
  styleUrls: ['./etudiants.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons,
    IonButton, IonIcon, IonBackButton 

  ]
})
export class EtudiantsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
