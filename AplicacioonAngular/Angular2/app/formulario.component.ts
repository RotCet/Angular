import { Component,Input, style} from '@angular/core';
import { print } from 'util';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
//pipes o filtros

@Component({
  selector: 'mi-Formularios',
  templateUrl:'app/templates/formulario.component.html',   
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
export class FormularioComponent  { 
  constructor(private router:Router){}
   estudiante={nombre: 'Rouse',correo:'grousss@hotmail.com'}  
     enviarFormulario(formulario:NgForm){
       alert("Usuario:"+ formulario.value.nombre);
        

    }
  }

