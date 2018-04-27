import { EMPLEADOS} from './arreglo.empleado'
 export class EmpleadoService{
    listaEmpleados(){
            return EMPLEADOS;
    }
    informacionEmpleado(id:number){
            return EMPLEADOS.find(empleado=>empleado.id===id);
    }
}