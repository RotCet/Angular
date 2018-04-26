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

//rutas de formulario
import { InicioComponent } from './templates/inicio.component';
import { NosotrosComponent } from './templates/nosotros.component';
import { ContactenosComponent } from './templates/contactenos.component';
import { routing } from './app.routing';

//Enviar datos
import { EmpleadoService } from './empleado.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule,routing],
  declarations: [ AppComponent,EstudiantesComponent
                 ,MaestrosComponent
                 ,AFahrenheitPipe
                 ,AStatus
                 ,FormularioComponent
                 ,FormularioExComponent
                ,InicioComponent
                ,NosotrosComponent
                ,ContactenosComponent],
  bootstrap:    [ AppComponent ],
  providers:   [EmpleadoService]
})
export class AppModule { }
