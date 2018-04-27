import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { EmpleadoService } from './empleado.service'

@Component({
  template: `<div *ngIf="empleado">
                Nombre: {{ empleado.name }}
                <br/>
                Correo Electrónico: {{ empleado.email }}
              </div>`
})

export class EmpleadoComponent implements OnInit{
  empleado:Object;

  constructor(private route:ActivatedRoute,
              private service:EmpleadoService){

  }
            
  ngOnInit(){
    let id = +this.route.snapshot.params['id'];
    this.service.informacionEmpleado(id)
                        .then(respuesta => this.empleado = respuesta);
  }
}
