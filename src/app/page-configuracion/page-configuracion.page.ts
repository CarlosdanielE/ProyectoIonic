import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonIcon, IonButton, IonItem, IonList,
  IonMenu,IonMenuButton,IonButtons,IonApp,IonLabel,IonToggle,IonMenuToggle 
 } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-configuracion',
  templateUrl: './page-configuracion.page.html',
  styleUrls: ['./page-configuracion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, 
    IonIcon, IonButton, CommonModule, FormsModule, RouterLink,
    IonMenu,IonMenuButton,IonButtons,IonApp,IonLabel,IonToggle,IonMenuToggle  

  ]
})
export class PageConfiguracionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
