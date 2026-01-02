import { Component, OnInit } from '@angular/core';

interface StatCard {
  label: string;
  value: string;
  icon: string;
  color: string; // blue, yellow, green, purple
}

interface Project {
  id: number;
  title: string;
  filiere: string;
  coders: number;
  stats: number;
  status: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // Données pour les 4 cartes du haut
  public stats: StatCard[] = [
    { label: 'Croissance', value: '92%', icon: 'arrow-up-circle', color: 'blue' },
    { label: 'Taux de satisfaction', value: '98%', icon: 'chatbubble-ellipses', color: 'yellow' },
    { label: 'Projets Actifs', value: '98%', icon: 'server', color: 'green' },
    { label: 'Certifications/Mois', value: '24', icon: 'bulb', color: 'purple' }
  ];

  // Données pour le tableau des projets
  public recentProjects: Project[] = [
    { 
      id: 1, 
      title: 'Plateforme E-commerce', 
      filiere: 'IDA', 
      coders: 2, 
      stats: 1020, 
      status: 'Actif' 
    },
    { 
      id: 2, 
      title: 'Application Mobile Santé', 
      filiere: 'IDA', 
      coders: 3, 
      stats: 850, 
      status: 'En attente' 
    }
  ];

  constructor() { }

  ngOnInit() {
    // Logique à l'initialisation (ex: appel API pour charger les vraies données)
    
  }

  // Fonction pour la barre de recherche
  onSearch(event: any) {
    const query = event.target.value.toLowerCase();
    console.log('Recherche pour :', query);
    // Ajoutez ici votre logique de filtrage
  }

  // Fonction pour le bouton d'action dans le tableau
  openProjectActions(project: Project) {
    console.log('Actions pour le projet :', project.title);
  }

}