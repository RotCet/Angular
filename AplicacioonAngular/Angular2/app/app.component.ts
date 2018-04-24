import { Component} from '@angular/core';

@Component({
  selector: 'mi-aplicacion',
  template: `<h1>Bienvenidos</h1>
            <estudiantes [mi-universidad]="laUniversidad" [mis-materias]="LaMateria" 
                          (seleccionados)=mostrarEstrudiante($event) ></estudiantes>

            `    
})

export class AppComponent  { 
  laUniversodad="Universidad Nacional KBAE"; 
  laMateria="8";
  mostrarEstrudiante(evento):void{
    alert(evento.nombre);
  }
}
