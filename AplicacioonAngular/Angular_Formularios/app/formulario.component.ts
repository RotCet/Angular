import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'mi-formulario',
  templateUrl: 'app/formulario.component.html',
  styles: [`
            input.ng-invalid.ng-touched{
              border-left:3px solid red;
              border-right:3px solid red;
              color: red;
            }
            input.ng-valid{
              border-left:3px solid green;
              border-right:3px solid green;
            }
            `]
})
export class FormularioComponent  {
  estudiante = {
    nombre: 'Felipe Arias',
    correo: 'felipe@ibm.com'
  }

  enviarFormulario(formulario:NgForm){
    console.log(this.estudiante);
  }

  mostrarModel(){
    console.log(this.estudiante);
  }
}