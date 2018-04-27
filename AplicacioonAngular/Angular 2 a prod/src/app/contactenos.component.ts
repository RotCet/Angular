import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  templateUrl: './contactenos.component.html'
})
export class ContactenosComponent {
    enviarFormulario(formulario: NgForm){
        console.log(formulario);
    }
}