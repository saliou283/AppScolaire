import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import pour la navigation
import { addIcons } from 'ionicons';
import { 
  codeSlashOutline, 
  layersOutline, 
  megaphoneOutline, 
  colorPaletteOutline, 
  arrowForwardCircle 
} from 'ionicons/icons';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,  
  IonCol, IonIcon, IonNote, IonGrid, IonRow, IonBackButton,  
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.page.html',
  styleUrls: ['./filiere.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonIcon, IonGrid, IonRow,
    IonButtons, 
    IonCol, IonBackButton
  ],
})
export class FilierePage implements OnInit {

  constructor(private router: Router) {
      // Enregistrement des icônes pour standalone
    addIcons({ 
      codeSlashOutline, 
      layersOutline, 
      megaphoneOutline, 
      colorPaletteOutline, 
      arrowForwardCircle 
    });
  }

  ngOnInit() {
    // Initialisation si nécessaire
  }

  // Fonction pour naviguer vers le détail d'une filière
  goToFiliere(nomFiliere: string) {
    console.log('Navigation vers :', nomFiliere);
    // Exemple : this.router.navigate(['/details', nomFiliere]);
  }
}