
import {Component,Input, Output,EventEmitter} from '@angular/core'
import {EstudiantesService}from './estudiantes.service'
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
   templateUrl:'app/templates/estudiantes.templates.html',
   providers:[EstudiantesService]
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
    estudiantes:string[];
    imagenUR="https://blog.dataprius.com/wp-content/uploads/2017/09/envio-correos-destino.jpg";
    redondeada=true;
    pading=true;
    n=1;
    //ayuda a encapsular información
    constructor(estudiantesService:EstudiantesService){
        this.estudiantes=estudiantesService.listaEstudiantes('Universidad Nacional KBAE');
    }
    listaEstudiantesG(universidad):Array<object>{
        if(universidad=="Universidad Nacional KBAE"){
             return [{nombre: 'Karina',apellido:'Sanchez'},{nombre: 'Lupita',apellido:'Reyna'}];
         }
         else{
             return [{nombre: 'Paulo',apellido:'Sanchez'},{nombre: 'Eleazar',apellido:'Reyna'}];
         }
 }
    alerta(){
        alert("si funciona");
        
    }
    cambiar(evento){
        this.titulo=evento.target.value;
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

