import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { EmpleadoService } from './empleados.service'

@Component({
    templateUrl : '/empleado.component.html'
})
export class EmpleadosComponent {
    empleado:Object;

    constructor(private route: ActivatedRoute,
                private empleadoservice: EmpleadoService,
                private router: Router){

    }

    ngOnInit(){
        let id = +this.route.snapshot.params['id'];
        this.empleadoservice.informacionEmpleado(id)
                            .then(empleado => this.empleado = empleado);
    }

    volver(){
        this.router.navigate(['/nosotros']);
    }
}