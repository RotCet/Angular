import { Component,Input} from '@angular/core';
//pipes o filtros

@Component({
  selector: 'mi-aplicacion',
  template: `<h1>Bienvenidos</h1>        
           <div class="container"> 
              <ul class="nav nav-tabs">
                <li (click)="pais='argentina'"><a>Datos Personales</a></li>
                <li (click)="pais='bolivia'"><a>Datos Generales</a></li>
                <li (click)="pais='brazil'"><a>Brazil</a></li>
                <li (click)="pais='chile'"><a>Chile</a></li>
              </ul>
           </div>           
           <div  class="container" [ngSwitch]="pais">
                <div class="btn btn-primary btn-block">
                El status del empleado es: {{status| aStatus}}
                </div>
                <div class="jumbotron"> La temperatura es 
                <span [ngClass]="{'text-danger':temperatura > 30, 'text-warning':temperatura<=30}">
                  {{temperatura | aFahrenheit:2}} °F
                </span>
                </div>

              <div *ngSwitchCase="'argentina'" class="panel panel-default"><span  class="panel-heading">DATOS PERSONALES</span>
                   <mi-Formularios></mi-Formularios> 
              </div>
              <div *ngSwitchCase="'bolivia'" class="panel panel-default"><span  class="panel-heading">DATOS GENERALES</span>
                  <mi-FormulariosEx></mi-FormulariosEx> 
              </div>
              <div *ngSwitchCase="'brazil'">Información de Brazil</div>
              <div *ngSwitchCase="'chile'">Información de Chile</div>
              <div *ngSwitchDefault class="jumbotron">
                  <estudiantes [mi-universidad]="laUniversidad" 
                [mis-materias]="LaMateria"  [mis-maestros]="losMaestros"
                (seleccionados)=mostrarEstrudiante($event) 
                ></estudiantes>
              </div>
           </div>      
           `   
})
export class AppComponent  { 
    pais:string;
    temperatura:number=20;
    status:"InActivo";
    laUniversodad="Universidad Nacional KBAE"; 
    laMateria="8";

    losMaestros="Maestros";
    mostrarEstrudiante(evento):void{
    alert(evento.nombre);
    //Menú     
  }
}
