import {Component, OnInit}from '@angular/core'
import { EmpleadoService } from '../empleado.service'
@Component({
    templateUrl:'./app/templates/contactenos.component.html'
})
//agrega interface implements OnInit
export class ContactenosComponent implements OnInit{
    empleados:Array<object>;
    constructor(private empleadoService:EmpleadoService){

    }
    listaDeEmpleados(){
        this.empleados=this.empleadoService.listaEmpleados();
    }
    ngOnInit(){
        this.listaDeEmpleados();
    }
}