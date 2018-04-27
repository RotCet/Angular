import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { EmpleadoService } from './empleados.service'

@Component({
  templateUrl : '/nosotros.component.html'
})

export class NosotrosComponent implements OnInit {
    empleados:Array<Object>;

    private selectedId: number;

    constructor(
        private empleadoService: EmpleadoService,
        private router: Router) {  }
        
    listaDeEmpleados(){
        this.empleadoService.listaDeEmpleados()
                            .then(empleados => this.empleados = empleados);    
    }

    ngOnInit() {
        this.listaDeEmpleados();
    }

    clickEnEmpleado(empleado) {
        this.router.navigate(['/empleado', empleado.id]);
    }
}