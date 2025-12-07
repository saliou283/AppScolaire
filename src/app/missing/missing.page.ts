import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonRow, IonGrid, IonSelectOption,
  IonSelect, IonLabel,IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonIcon, IonButton,
  IonInput, IonCheckbox, IonToggle, IonCard, IonList, IonDatetime, IonSegmentButton, IonSegment,
  IonButtons, IonBackButton, 
 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-missing',
  templateUrl: './missing.page.html',
  styleUrls: ['./missing.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCol,
    IonRow,IonGrid, IonSelectOption, IonSelect, IonLabel, IonItem, IonCardContent, IonCardTitle, IonCardHeader,
    IonIcon, IonButton, IonInput, IonCheckbox, IonToggle, IonCard, IonList, IonDatetime, IonSegmentButton,
    IonSegment , IonButtons, IonBackButton
  ]
})
export class MissingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
