//import { EMPLEADOS} from './arreglo.empleado'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class EmpleadoService{
  constructor(private http:Http){}

  listaDeEmpleados(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
              .toPromise()
              .then(respuesta => respuesta.json())
              .catch(this.ocurrioUnError)
  }

  informacionEmpleado(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
              .toPromise()
              .then(respuesta => respuesta.json())
              .catch(this.ocurrioUnError)
  }

  private ocurrioUnError(error:any){
    console.log("Ocurrió un error en el llamado HTTP", error);
    return Promise.reject(error.message || error);
  }
}