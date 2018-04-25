import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { EstudiantesComponent }  from './estudiantes.components';
import { MaestrosComponent }  from './maestos.components';
import { AFahrenheitPipe } from './aFahrenheit.pipe';
import { AStatus } from './aStratus.pipes';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,EstudiantesComponent ,MaestrosComponent,AFahrenheitPipe,AStatus],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
