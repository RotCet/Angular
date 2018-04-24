
import {Component,Input, Output,EventEmitter} from '@angular/core'

//Para exportar componentes de generan decoradores
//Enlace de datos de una propiedad o evento
//Enlace [] componente
//Enlace de Evento ()
//<img [src]="imagenUR"/
// si se usa de este ,
        //inputs:['universidad']
        //No se importa Input y se elimina de la variable  @Input() 

@Component({
   selector:'estudiantes',
   template:`
   <div [style.padding]="pading?40:0">
    <h3>{{titulo}}</h3>
        {{titulo}} <br>
        <ul>
            <li *ngFor="let estudiante of estudiantes">
              <span (click)="ClicEstudiante($event)"> 
                 {{estudiante}}
            </span>
            </li>
        </ul>
    <br>
    <button (click)="alerta()">Test</button>
    <input type="text" [(ngModel)]="titulo"/>
    <br>
        <button (click)="titulo=''">Test</button>
        <input type="text" [value]="titulo" (input)=cambiar($event)/>
    <br>
    <img src="{{imagenUR}}" [class.img-rounded]="redondeada" />
    <br>
    <ul>
        <li *ngFor="let estudianteU of listaEstudiantes()">
            {{estudianteU}}
        </li>
    </ul>
    <br>
    <ul>
    <li *ngFor="let materias of listaMaterias()">
        {{materias}}
    </li>
    
</ul>
</div>
`
})
export class EstudiantesComponent{
    //variable para conectar diferentes componentes con un decorador @
    @Input('mi-universidad') universidad:string; /// es necesario importar la libreria para el decorador y se puedes modificar el nombre que se está mostrando
    @Input('mis-materias') materias:string;
    @Output() seleccionados= new EventEmitter();
    //Agrega Contenido a la clase y agrega una interpolacion
    titulo="Lista de Estudiantes";
    description="Ingresa Calificación";
    estudiantes=['Andrea','María'];
    imagenUR="https://gcdn.emol.cl/mascotas/files/2018/03/perro-raro.jpg";
    redondeada=true;
    pading=true;

    alerta(){
        alert("si funciona");
        
    }
    cambiar(evento){
        this.titulo=evento.target.value;
    }
    listaEstudiantes():Array<string>{
            if(this.universidad=="Universidad Nacional KBAE"){
                return ['Karla','Driana'];
            }
            else{
                return ['Paulo','Eleazar'];
            }
    }
    listaMaterias():Array<string>{
        if(this.materias=="10")
        {
            return ['Literatura','Quimica'];
        }
        else{
            return ['Español','Mate'];
        }
       
    }
    ClicEstudiante(evento):void{
        this.seleccionados.emit({nombre: evento.target.textContent});
    }
}

