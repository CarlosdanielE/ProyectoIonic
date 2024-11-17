import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet,IonMenu,IonMenuButton,IonButtons,IonLabel,IonToggle,IonMenuToggle} from '@ionic/angular/standalone';
import { ComponentsModule } from './components/components.module';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet,IonMenu,IonMenuButton,IonButtons,IonApp,IonLabel,IonToggle,IonMenuToggle,
    ComponentsModule,IonMenu,IonMenuButton,IonButtons,IonApp,IonLabel,IonToggle,IonMenuToggle
  ],
})
export class AppComponent {
  constructor() {}
}
