import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-parc',
  templateUrl: './parc.page.html',
  styleUrls: ['./parc.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class ParcPage implements OnInit {


  constructor() {}

  ngOnInit() {
   
    }
  }

  