import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  templateUrl: '/app/contactenos.component.html'
})

export class ContactenosComponent {
  formulario: FormGroup;

  constructor(private router:Router){
    this.formulario = new FormGroup({
      nombre: new FormControl('', 
        [
          Validators.required, 
          Validators.pattern("^.{4,}$")
        ]),
      correo: new FormControl('', 
                      [Validators.required, this.elCorreoNoEsUnico])
    });
  }

  enviarFormulario(){
    console.log(this.formulario);
    this.router.navigate(['nosotros']);
  }

  elCorreoNoEsUnico(control: FormControl):{[s:string]:Boolean}{
    var correos: string[] = ['jose@ibm.com', 'carlos@ibm.com'];

    if(correos.indexOf(control.value) != -1){
      return { elCorreoNoEsUnico: true };
    }

    return null;
  }

}