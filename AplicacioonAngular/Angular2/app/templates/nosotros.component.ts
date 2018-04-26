import {Component,style}from '@angular/core';
import {Router} from '@angular/router'
import { NgForm } from '@angular/forms'

@Component({
    templateUrl:'./app/templates/nosotros.component.html',
    styles:[`
    input.ng-invalid.ng-touched{
        border-left:3px solid red;
        color: red;
    }
    input.ng-valid{
       border-left:3px solid green;
       color: black;
    }`]
})

export class NosotrosComponent 
{
   
    constructor(private router:Router){

    }
    
    estudiante={nombre: 'Rouse',correo:'grousss@hotmail.com'}  
      enviarFormulario(formulario:NgForm){
         //alert("Usuario:"+ formulario.value.nombre);
         this.router.navigate(['inicio']); 
     }    
}