import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { EstudiantesComponent }  from './estudiantes.components';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,EstudiantesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
