import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; 

// Interfaces pour la structure des données (à déplacer dans un fichier models)
interface Thread {
  id: number;
  expediteur: string;
  role: 'Parent' | 'Enseignant' | 'Admin';
  objet: string;
  apercu: string;
  date: string;
  nonLu: boolean;
}

interface Message {
  id: number;
  auteur: 'Moi' | 'Autre';
  contenu: string;
  timestamp: string;
  piecesJointes?: string[];
}

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.page.html',
  styleUrls: ['./messagerie.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class MessageriePage implements OnInit {

  // Liste des conversations (simulées)
  threads: Thread[] = [
    { id: 1, expediteur: 'Mme. Diallo', role: 'Admin', objet: 'Alerte : Fermeture de l\'école', apercu: 'Veuillez noter que l\'école sera fermée le...', date: '13/12/2025', nonLu: true },
    { id: 2, expediteur: 'M. Konaté', role: 'Parent', objet: 'Question sur le devoir de Maths', apercu: 'Bonjour, pourriez-vous m\'éclairer sur l\'exercice...', date: '11/12/2025', nonLu: false },
    { id: 3, expediteur: 'M. Sylla', role: 'Enseignant', objet: 'Rapport de suivi d\'élève', apercu: 'Le comportement de Fatou s\'est amélioré...', date: '10/12/2025', nonLu: true },
  ];

  // Le thread actuellement sélectionné
  selectedThread: Thread | null = null;
  
  // Contenu du thread sélectionné (simulé)
  messages: Message[] = [];
  
  // Modèle pour le nouveau message à envoyer
  nouveauMessage: string = '';

  constructor() {}

  ngOnInit() {
    // Sélectionne le premier thread au chargement (ou le thread le plus récent)
    if (this.threads.length > 0) {
      this.selectThread(this.threads[0]);
    }
  }

  // Logique pour sélectionner et charger les messages d'un thread
  selectThread(thread: Thread) {
    this.selectedThread = thread;
    
    // Marquer comme lu
    this.threads.find(t => t.id === thread.id)!.nonLu = false;
    
    // Charger les messages spécifiques (simulé)
    this.messages = [
      { id: 101, auteur: 'Autre', contenu: 'Bonjour M. KONE, quelle est la meilleure manière d\'aborder ce sujet ?', timestamp: '11:00' },
      { id: 102, auteur: 'Moi', contenu: 'Bonjour, vous pouvez vous concentrer sur les sources principales mentionnées en classe.', timestamp: '11:05' },
      { id: 103, auteur: 'Autre', contenu: 'Merci pour cette précision!', timestamp: '11:15' },
    ];
  }
  
  // Logique pour envoyer un message
  envoyerMessage() {
    if (this.nouveauMessage.trim() === '' || !this.selectedThread) {
      return;
    }
    
    const newMessage: Message = {
      id: Date.now(),
      auteur: 'Moi',
      contenu: this.nouveauMessage,
      timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    };
    
    this.messages.push(newMessage);
    this.nouveauMessage = ''; // Vider le champ
    
    // Logique d'envoi à l'API serait ici
    console.log('Message envoyé à:', this.selectedThread.expediteur);
    
    // (Optionnel) Scroll vers le bas après l'envoi
    // document.getElementById('message-list')?.scrollTop = document.getElementById('message-list')?.scrollHeight;
  }
}