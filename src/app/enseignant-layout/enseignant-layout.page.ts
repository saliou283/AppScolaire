/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { addIcons } from 'ionicons';
// Importez TOUTES les icônes utilisées dans votre HTML et vos listes
import { 
  personCircle, megaphone, mail, home, 
  calendar, create, book, closeCircle, 
  school, logOutOutline 
} from 'ionicons/icons';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-enseignant-layout',
  templateUrl: './enseignant-layout.page.html',
  styleUrls: ['./enseignant-layout.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    RouterLinkActive,
   
  ]
})
export class EnseignantLayoutPage implements OnInit {
  constructor() {
    // Enregistrez TOUTES les icônes ici
    addIcons({
      'person-circle': personCircle, 
      'mail': mail, 
      'megaphone': megaphone,
      'home': home,
      'calendar': calendar,
      'create': create,
      'book': book,
      'close-circle': closeCircle,
      'school': school,
      'log-out-outline': logOutOutline
    });
  }

  // Vos tableaux de menus (appPages, gestionPedagogique, etc.) restent ici...
  public appPages = [
    { title: 'Accueil', url: '/enseignant/dashboard', icon: 'home' },
    { title: 'Mon Emploi du Temps', url: '/enseignant/emploi-du-temps', icon: 'calendar' },
  ];

  public gestionPedagogique = [
    { title: 'Saisie des Notes', url: '/enseignant/saisie-notes', icon: 'create' },
    { title: 'Cahier de Textes', url: '/enseignant/cahier-texte', icon: 'book' },
    { title: 'Registres d\'Absences', url: '/enseignant/absences', icon: 'close-circle' },
  ];
  
  public suiviEleves = [
    { title: 'Fiches Élèves', url: '/enseignant/fiches-eleves', icon: 'person-circle' },
    { title: 'Conseils de Classe', url: '/enseignant/conseils-classe', icon: 'school' },
  ];

  public communication = [
    { title: 'Messagerie Interne', url: '/enseignant/messagerie', icon: 'mail' },
    { title: 'Annonces de Classe', url: '/enseignant/annonces', icon: 'megaphone' },
  ];

  ngOnInit() {}
  
  logout() {
    console.log('Déconnexion...');
  }
}*/