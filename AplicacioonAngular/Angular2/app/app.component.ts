import { Component,Input} from '@angular/core';

@Component({
  selector: 'mi-aplicacion',
  template: `<h1>Bienvenidos</h1>        
           
            <estudiantes [mi-universidad]="laUniversidad" 
            [mis-materias]="LaMateria"  [mis-maestros]="losMaestros"
            (seleccionados)=mostrarEstrudiante($event) 
            ></estudiantes>

            `    
})

export class AppComponent  { 
 
  laUniversodad="Universidad Nacional KBAE"; 
  laMateria="8";

 losMaestros="Maestros";
  mostrarEstrudiante(evento):void{
    alert(evento.nombre);
  }

}
