import {Component,Input, Output,EventEmitter} from '@angular/core'
import { SummaryResolver } from '@angular/compiler/src/summary_resolver';
@Component({
    selector:'Maestos',
    template:`
        <div>Lista de Maestos y su Materia Asignada</div>
        <h3>{{titulo}}</h3>
        <br>
        <ul>
            <li *ngFor="let maestro of maestros">{{maestro}}<span></span></li>
        </ul>`

})
export class MaestrosComponent{
    @Input('mis-maestros') mestros:string;
    titulo:'Maestro:';
    maestro=['Claudia',['David']];
    n=0;
    sumar(){return this.n+1};
    
}
