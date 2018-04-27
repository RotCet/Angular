import {Component } from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {EmpleadoService} from './empleado.service'
@Component({
    template:'{{empleado.nombre}}'
})
export class EmpleadoComponent{
    empleado:object;

    constructor(private route:ActivatedRoute,private service:EmpleadoService){
        let id=+route.snapshot.params['id'];
        this.empleado=service.informacionEmpleado(id);
        
    }
}