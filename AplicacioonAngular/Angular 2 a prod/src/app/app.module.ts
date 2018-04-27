import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import { routing, appRoutingProviders } from './app.routing';
import { EmpleadoService } from './empleados.service'

import { InicioComponent } from './inicio.component';
import { NosotrosComponent } from './nosotros.component';
import { ContactenosComponent } from './contactenos.component';
import { EmpleadosComponent } from './empleados.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ AppComponent, 
                  InicioComponent,
                  NosotrosComponent,
                  ContactenosComponent,
                  EmpleadosComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ appRoutingProviders, EmpleadoService ]
})
export class AppModule { }
