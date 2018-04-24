
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
   templateUrl:'app/templates/estudiantes.templates.html'
}) 
export class EstudiantesComponent{
    //variable para conectar diferentes componentes con un decorador @
    @Input('mi-universidad') universidad:string; /// es necesario importar la libreria para el decorador y se puedes modificar el nombre que se está mostrando
    @Input('mis-materias') materias:string;
    @Input('mis-maestros') maestros:string;
    @Output() seleccionados= new EventEmitter();
    //Agrega Contenido a la clase y agrega una interpolacion
    titulo="Lista de Estudiantes";
    description="Ingresa Calificación";
    estudiantes=['Andrea','María'];
    imagenUR="https://gcdn.emol.cl/mascotas/files/2018/03/perro-raro.jpg";
    redondeada=true;
    pading=true;
    n=1;
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
    listaMaestros():Array<string>{        
            return ['David','Ernesto'];       
    }
    ClicEstudiante(evento):void{
        this.seleccionados.emit({nombre: evento.target.textContent});
    }
  
}

