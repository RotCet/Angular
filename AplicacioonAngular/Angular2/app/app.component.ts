import { Component,Input} from '@angular/core';
//pipes o filtros

@Component({
  selector: 'mi-aplicacion',
  template: `<h1>Bienvenidos</h1>        
           <div class="container"> 
              <ul class="nav nav-tabs">
                <li (click)="pais='argentina'"><a>Argentina</a></li>
                <li (click)="pais='bolivia'"><a>Bolivia</a></li>
                <li (click)="pais='brazil'"><a>Brazil</a></li>
                <li (click)="pais='chile'"><a>Chile</a></li>
              </ul>
           </div>
           
           <div  class="container" [ngSwitch]="pais">
                <div class="jumbotron"> La temperatura es 
                <span [ngClass]="{'text-danger':temperatura > 30, 'text-warning':temperatura<=30}">
                  {{temperatura | aFahrenheit:2}} °F
                </span>
                </div>
              <div *ngSwitchCase="'argentina'">Información de Argentina</div>
              <div *ngSwitchCase="'bolivia'">Información de Bolivia</div>
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
    laUniversodad="Universidad Nacional KBAE"; 
    laMateria="8";

    losMaestros="Maestros";
    mostrarEstrudiante(evento):void{
    alert(evento.nombre);
    //Menú
     
  }

}
