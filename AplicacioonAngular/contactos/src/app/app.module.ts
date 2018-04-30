import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD485TUWA3pprSKbCfQByzGtFwztxOBFX4",
    authDomain: "contactos-95061.firebaseapp.com",
    databaseURL: "https://contactos-95061.firebaseio.com",
    projectId: "contactos-95061",
    storageBucket: "contactos-95061.appspot.com",
    messagingSenderId: "859556342150"
  }
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase,'contactos')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
