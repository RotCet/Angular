import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { EstudiantesComponent }  from './estudiantes.components';
import { MaestrosComponent }  from './maestos.components';
import { AFahrenheitPipe } from './aFahrenheit.pipe';
import { AStatus } from './aStratus.pipes';
import { FormularioComponent} from './formulario.component'
import { FormularioExComponent} from './formularioEx.component'
@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule],
  declarations: [ AppComponent,EstudiantesComponent ,MaestrosComponent,AFahrenheitPipe,AStatus,FormularioComponent,FormularioExComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
