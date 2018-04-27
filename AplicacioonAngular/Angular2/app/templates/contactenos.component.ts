import {Component, OnInit}from '@angular/core'
import { EmpleadoService } from '../empleado.service'
import {Router} from '@angular/router'
@Component({
    templateUrl:'./app/templates/contactenos.component.html'
})
//agrega interface implements OnInit
export class ContactenosComponent implements OnInit{
    empleados:Array<object>;
    constructor(private empleadoService:EmpleadoService,private router:Router){

    }
    listaDeEmpleados(){
        this.empleadoService.listaDeEmpleados().then(respuesta => this.empleados=respuesta);
    }
    ngOnInit(){
        this.listaDeEmpleados();
    }
    clickEmpleado(empleado:any){
        this.router.navigate(['empleado',empleado.id]);
    }

}