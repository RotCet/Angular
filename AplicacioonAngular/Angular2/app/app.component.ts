import { Component,Input} from '@angular/core';
//pipes o filtros

@Component({
  selector: 'mi-aplicacion',
  template: `
  <div class="container">  
    <div class="container-fluid" style="color:#000000;height:80px;background-image: url('http://webproduccionaudiovisual.com/wp-content/uploads/2016/04/app-tecnologia-tablets-y-moviles.jpg'); text-align:right; ">       
    <h1>Bienvenidos </h1>
    
    </div> 
  </div>
           <div class="container"> 
              <ul  class="nav nav-tabs">
                <li  (click)="pais='Home'" ><a [routerLink]="['/']"><i class="glyphicon glyphicon-home"></i>Home</a></li>
                <li (click)="pais='Otro'"><a [routerLink]="['inicio']"  routerLinkActive="active"><i class="glyphicon glyphicon-ok-sign"></i>Inicio</a></li>
                <li (click)="pais='argentina'"><a [routerLink]="['/']" ><i class="glyphicon glyphicon-user"></i>Datos Personales</a></li>
                <li (click)="pais='bolivia'"><a [routerLink]="['/']"  ><i class="	glyphicon glyphicon-pencil"></i>Datos Generales</a></li>               
                <li (click)="pais='nosotros'"><a [routerLink]="['nosotros']"  routerLinkActive="active"><i class="glyphicon glyphicon-apple"></i>Nosotros</a></li>
                <li (click)="pais='contactanos'"><a [routerLink]="['contactanos']"  routerLinkActive="active"><i class="glyphicon glyphicon-earphone"></i>Contactanos</a></li>
              </ul>
           </div>    
           <router-outlet></router-outlet>       
           <div  class="container" [ngSwitch]="pais" >
      
               
                <div *ngSwitchCase="'Otro'">

              </div>          
              <div *ngSwitchCase="'argentina'" class="panel panel-default"><span  class="panel-heading">DATOS PERSONALES</span>
              <br> <mi-Formularios></mi-Formularios> 
              </div>
              <div *ngSwitchCase="'bolivia'" class="panel panel-default"><span  class="panel-heading">DATOS GENERALES</span>
              <br>
                  <mi-FormulariosEx></mi-FormulariosEx> 
              </div>
              
              <div *ngSwitchCase="'nosotros'"></div>
              <div *ngSwitchCase="'contactanos'"></div>
             
              <div *ngSwitchDefault > 
              <div class="jumbotron">  
                    <div class="btn btn-danger" > La temperatura es 
                      <span [ngClass]="{'text-danger':temperatura> 30, 'text-warning':temperatura<=30}" >
                        {{temperatura | aFahrenheit:2}} °F
                      </span>
                    </div>
                    <div class="btn btn-primary btn-block">
                            El status del empleado es: {{status| aStatus}}
                   </div>    
                   </div>               
                  <br>
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
