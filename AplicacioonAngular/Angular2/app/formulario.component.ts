import { Component,Input} from '@angular/core';
import { print } from 'util';
import { NgForm } from '@angular/forms';
//pipes o filtros

@Component({
  selector: 'mi-Formularios',
  templateUrl:'app/templates/formulario.component.html'   
})
export class FormularioComponent  { 
    enviarFormulario(formulario:NgForm){
        alert("Usuario:"+ formulario.value.nombre);
    }
  }

