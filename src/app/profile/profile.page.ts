// src/app/profile/profile.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

// 🔑 Imports Firebase
import { Auth, User, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ProfilePage implements OnInit {

constructor() {}

  
   ngOnInit() {
  
  }
  }

  