import { Component } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li *ngFor="let item of items | async">
      {{ item.Nombre }}
    </li>
  </ul>
  `
  //selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aprendiento Angular';
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items =  db.collection('contactos').valueChanges()
  }

 // constructor(db: AngularFireDatabase) {
 //   this.items = db..list('/contactos');
 // }
}
