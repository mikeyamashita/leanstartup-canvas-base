import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  items: Array<any> = new Array<any>();

  constructor() {
    this.items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 },]
  }
}
