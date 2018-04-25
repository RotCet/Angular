import{Pipe,PipeTransform}from '@angular/core'
@Pipe({name:'aFahrenheit'})
export class AFahrenheitPipe implements PipeTransform{
    transform(valor:number,arg:any){
        if(valor){
            let termperatura=(valor*9/5)+32;
            return termperatura;
        }
    }

}       