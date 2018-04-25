import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';

106074310

@Component({
  selector: 'mi-FormulariosEx',
  templateUrl:'app/templates/formularioEx.componet.html' 
 
})
export class FormularioExComponent  { 
    //formularios explicitos
    formulario:FormGroup;
  constructor(){
      this.formulario=new FormGroup({
          telefono:new FormControl('',
          [
              Validators.required,
              Validators.pattern("^.{4,}$"),this.elTelefonoNoEsUnico]),//se puede agregar datos  FormControl('4421712804')
         
          direccion:new FormControl('',Validators.required,this.elTelefonoNoEsUnicoAsync)});    
}
enviarFormulario(){
    alert("Su telefono es: ");
    }
elTelefonoNoEsUnico(control:FormControl):{[s:string]:Boolean}{
    var telefonos:string[]=['T4421712804','T4686828044'];
    if(telefonos.indexOf(control.value)!=-1){
        return {elTelefonoNoEsUnico: true};
    }
    
        return null;  
    }
    elTelefonoNoEsUnicoAsync(control: FormControl){
        return new Promise((resolver,rechazar)=>{
            setTimeout(function(){
                if(control.value==='Ortonumero'){
                    resolver({elTelefonoNoEsUnicoAsync:true});
                }
                else{
                    resolver(null);
                }            
            }
            ,2000);
        })
    }
}

