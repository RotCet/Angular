import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { InicioComponent } from './inicio.component'
import { NosotrosComponent } from './nosotros.component'
import { ContactenosComponent } from './contactenos.component'
import { EmpleadoComponent } from './empleado.component'

import { routing } from './app.routing'

import { EmpleadoService } from './empleado.service'

@NgModule({
  imports:      [ BrowserModule, routing, ReactiveFormsModule, HttpModule ],
  declarations: [ AppComponent, 
                  InicioComponent, 
                  NosotrosComponent, 
                  ContactenosComponent,
                  EmpleadoComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ EmpleadoService ]
})
export class AppModule { }
