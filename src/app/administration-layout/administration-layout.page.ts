import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-administration-layout',
  templateUrl: './administration-layout.page.html',
  styleUrls: ['./administration-layout.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonicModule, 
    RouterLink, 
    RouterLinkActive,
    
  ]
})
export class AdministrationLayoutPage implements OnInit {

  // Menu principal pour la Direction/Administration
  public appPages = [
    { title: 'Accueil (KPIs)', url: '/admin/dashboard', icon: 'home' },
  ];

  public gestionEffectifs = [
    { title: 'Élèves & Inscriptions', url: '/admin/gestion-eleves', icon: 'people' },
    { title: 'Personnel Enseignant', url: '/admin/gestion-enseignants', icon: 'school' },
    { title: 'Personnel Administratif', url: '/admin/gestion-rh', icon: 'briefcase' },
  ];
  
  public gestionPedagogique = [
    { title: 'Classes & Salles', url: '/admin/classes-salles', icon: 'grid' },
    { title: 'Emplois du Temps', url: '/admin/emplois-temps', icon: 'calendar' },
    { title: 'Résultats & Rapports', url: '/admin/rapports', icon: 'bar-chart' },
  ];

  public financesFacturation = [
    { title: 'Frais de Scolarité', url: '/admin/frais-scolarite', icon: 'wallet' },
    { title: 'Comptabilité & Factures', url: '/admin/comptabilite', icon: 'cash' },
    { title: 'Relances Impayés', url: '/admin/relances', icon: 'alert-circle' },
  ];

  public systemeCommunication = [
    { title: 'Messagerie de Masse', url: '/admin/messagerie', icon: 'mail' },
    { title: 'Gestion des Utilisateurs', url: '/admin/utilisateurs', icon: 'settings' },
  ];

  constructor() {}

  ngOnInit() {
  }
  
  logout() {
    console.log('Déconnexion Administrateur...');
    // Logique de déconnexion
  }
}