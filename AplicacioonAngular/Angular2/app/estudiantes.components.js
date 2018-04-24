"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//Para exportar componentes de generan decoradores
//Enlace de datos de una propiedad o evento
//Enlace [] componente
//Enlace de Evento ()
//<img [src]="imagenUR"/
// si se usa de este ,
//inputs:['universidad']
//No se importa Input y se elimina de la variable  @Input() 
var EstudiantesComponent = (function () {
    function EstudiantesComponent() {
        this.seleccionados = new core_1.EventEmitter();
        //Agrega Contenido a la clase y agrega una interpolacion
        this.titulo = "Lista de Estudiantes";
        this.description = "Ingresa Calificación";
        this.estudiantes = ['Andrea', 'María'];
        this.imagenUR = "https://gcdn.emol.cl/mascotas/files/2018/03/perro-raro.jpg";
        this.redondeada = true;
        this.pading = true;
    }
    EstudiantesComponent.prototype.alerta = function () {
        alert("si funciona");
    };
    EstudiantesComponent.prototype.cambiar = function (evento) {
        this.titulo = evento.target.value;
    };
    EstudiantesComponent.prototype.listaEstudiantes = function () {
        if (this.universidad == "Universidad Nacional KBAE") {
            return ['Karla', 'Driana'];
        }
        else {
            return ['Paulo', 'Eleazar'];
        }
    };
    EstudiantesComponent.prototype.listaMaterias = function () {
        if (this.materias == "10") {
            return ['Literatura', 'Quimica'];
        }
        else {
            return ['Español', 'Mate'];
        }
    };
    EstudiantesComponent.prototype.ClicEstudiante = function (evento) {
        this.seleccionados.emit({ nombre: evento.target.textContent });
    };
    __decorate([
        core_1.Input('mi-universidad'),
        __metadata("design:type", String)
    ], EstudiantesComponent.prototype, "universidad", void 0);
    __decorate([
        core_1.Input('mis-materias'),
        __metadata("design:type", String)
    ], EstudiantesComponent.prototype, "materias", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], EstudiantesComponent.prototype, "seleccionados", void 0);
    EstudiantesComponent = __decorate([
        core_1.Component({
            selector: 'estudiantes',
            template: "\n   <div [style.padding]=\"pading?40:0\">\n    <h3>{{titulo}}</h3>\n        {{titulo}} <br>\n        <ul>\n            <li *ngFor=\"let estudiante of estudiantes\">\n              <span (click)=\"ClicEstudiante($event)\"> \n                 {{estudiante}}\n            </span>\n            </li>\n        </ul>\n    <br>\n    <button (click)=\"alerta()\">Test</button>\n    <input type=\"text\" [(ngModel)]=\"titulo\"/>\n    <br>\n        <button (click)=\"titulo=''\">Test</button>\n        <input type=\"text\" [value]=\"titulo\" (input)=cambiar($event)/>\n    <br>\n    <img src=\"{{imagenUR}}\" [class.img-rounded]=\"redondeada\" />\n    <br>\n    <ul>\n        <li *ngFor=\"let estudianteU of listaEstudiantes()\">\n            {{estudianteU}}\n        </li>\n    </ul>\n    <br>\n    <ul>\n    <li *ngFor=\"let materias of listaMaterias()\">\n        {{materias}}\n    </li>\n    \n</ul>\n</div>\n"
        })
    ], EstudiantesComponent);
    return EstudiantesComponent;
}());
exports.EstudiantesComponent = EstudiantesComponent;
//# sourceMappingURL=estudiantes.components.js.map