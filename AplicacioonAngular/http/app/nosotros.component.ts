import { Component, OnInit } from '@angular/core'
import { EmpleadoService } from './empleado.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: '/app/nosotros.component.html'
})

export class NosotrosComponent implements OnInit{
  empleados: Array<Object>;

  constructor(private empleadoService:EmpleadoService,
              private router:Router){}

  listaDeEmpleados(){
    this.empleadoService.listaDeEmpleados()
                        .then(respuesta => this.empleados = respuesta);
  }
  
  ngOnInit(){
    this.listaDeEmpleados();
  }

  clickEnEmpleado(empleado:any){
    this.router.navigate(['empleado', empleado.id]);
  }
}