import {Component,style}from '@angular/core';
import {Router} from '@angular/router'
import { NgForm } from '@angular/forms'
import { Http } from '@angular/http'

@Component({
    templateUrl:'./app/templates/nosotros.component.html',
    styles:[`
    input.ng-invalid.ng-touched{
        border-left:3px solid red;
        color: red;
    }
    input.ng-valid{
       border-left:3px solid green;
       color: black;
    }`]
})

export class NosotrosComponent 
{
   
    constructor(private router:Router,private http:Http){

    }
    
    estudiante={nombre: 'Rouse',correo:'grousss@hotmail.com'}  
      enviarFormulario(formulario:NgForm){
         //alert("Usuario:"+ formulario.value.nombre); se activa para navegar a otroa página
         this.enviarInformacion({nombre:formulario.value.nombre,
        correo: formulario.value.correo});
        alert("El servicio fue llamado");
         
        // this.router.navigate(['inicio']); 
     }   
     enviarInformacion(usuario:any){
         const info=JSON.stringify(usuario);
        return this.http.post('https://baseangular-b68c7.firebaseio.com/data.json',info).toPromise().then(respuesta => alert(respuesta));
     } 
}