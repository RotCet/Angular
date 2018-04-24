import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { EstudiantesComponent }  from './estudiantes.components';
import { MaestrosComponent }  from './maestos.components';
import { AFahrenheitPipe } from './aFahrenheit.pipe'
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,EstudiantesComponent ,MaestrosComponent,AFahrenheitPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
