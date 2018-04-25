import { Pipe,PipeTransform } from "@angular/core";

//Primero decoro y exporto
@Pipe({name: 'aStatus'})
export class AStatus implements PipeTransform{
    transform(){
        let status="Activo";
        return status;
    }
}