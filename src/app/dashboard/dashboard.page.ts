
/*import { Component, OnInit } from '@angular/core';
import { 
   IonRouterOutlet, IonIcon,  IonList,IonContent,IonMenu,
  IonSplitPane,
 IonItem, IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  notificationsOutline, homeOutline, settingsOutline, megaphone, 
  people, checkmarkCircle, wallet, warning, constructOutline, 
  calendarOutline, searchOutline, personCircleOutline, school, 
  gridOutline, briefcaseOutline, mailOutline, moonOutline, layersOutline,
bookOutline, schoolOutline,
  receiptOutline, 
  chatbubblesOutline, timeOutline
} from 'ionicons/icons';
import { CommonModule } from '@angular/common'; // Import nécessaire pour le *ngFor et *ngIf
import { IonApp } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true, // INDISPENSABLE pour utiliser les imports ci-dessous
  imports: [
    CommonModule, IonRouterOutlet, IonIcon,  
      IonList, IonContent,IonMenu,
 IonItem, IonLabel, IonSplitPane
   
  ]
})
export class DashboardPage implements OnInit  { // PascalCase : ComponentPage au lieu de componentPage

  // Données pour les statistiques (KPI)
  stats = [
    { label: 'Total Students', value: '1,250', icon: 'people', colorClass: 'blue' },
    { label: 'Daily Attendance', value: '95%', icon: 'checkmark-circle', colorClass: 'green' },
    { label: 'Fees Collected', value: '82%', icon: 'wallet', colorClass: 'orange' },
    { label: 'Pending Alerts', value: '2', icon: 'warning', colorClass: 'red' }
  ];

  // Données pour l'emploi du temps
  timetable = [
    { time: '09:00', mon: 'Maths', tue: '', wed: 'Science', thu: '', fri: 'History' },
    { time: '10:30', mon: '', tue: 'English', wed: '', thu: 'Maths', fri: '' },
    { time: '12:00', mon: 'Physics', tue: 'Art', wed: 'Physics', thu: '', fri: 'Sport' },
  ];

  // Données pour les annonces
  announcements = [
    { title: 'Site Maintenance', date: 'Friday 19th - 19 PM', icon: 'construct-outline' },
    { title: 'New Exam Schedule', date: 'Monday 22nd', icon: 'calendar-outline' }
  ];



  constructor() {
    // IMPORTANT : Enregistrer toutes les icônes utilisées dans le HTML et les tableaux
    addIcons({ 
      notificationsOutline, homeOutline, settingsOutline, megaphone, 
      people, checkmarkCircle, wallet, warning, constructOutline, 
      calendarOutline, searchOutline, personCircleOutline, school,
      gridOutline, briefcaseOutline,     mailOutline, receiptOutline,
       moonOutline,  layersOutline, bookOutline, chatbubblesOutline,
        schoolOutline, timeOutline
    });
  }

  ngOnInit() {
    console.log('Dashboard Initialisé');
  }

  handleSearch(event: any) {
    const query = event.target.value.toLowerCase();
    console.log('Recherche pour :', query);
  }

  toggleDarkMode(event: any) {
    const isDark = event.detail.checked;
    document.body.classList.toggle('dark', isDark);
  }

  goToProfile() {
    console.log('Navigation vers le profil');
  }
}
*/