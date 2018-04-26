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
var estudiantes_service_1 = require("./estudiantes.service");
//Para exportar componentes de generan decoradores
//Enlace de datos de una propiedad o evento
//Enlace [] componente
//Enlace de Evento ()
//<img [src]="imagenUR"/
// si se usa de este ,
//inputs:['universidad']
//No se importa Input y se elimina de la variable  @Input() 
var EstudiantesComponent = (function () {
    //ayuda a encapsular información
    function EstudiantesComponent(estudiantesService) {
        this.seleccionados = new core_1.EventEmitter();
        //Agrega Contenido a la clase y agrega una interpolacion
        this.titulo = "Lista de Estudiantes";
        this.description = "Ingresa Calificación";
        this.imagenUR = "https://blog.dataprius.com/wp-content/uploads/2017/09/envio-correos-destino.jpg";
        this.redondeada = true;
        this.pading = true;
        this.n = 1;
        this.estudiantes = estudiantesService.listaEstudiantes('Universidad Nacional KBAE');
    }
    EstudiantesComponent.prototype.listaEstudiantesG = function (universidad) {
        if (universidad == "Universidad Nacional KBAE") {
            return [{ nombre: 'Karina', apellido: 'Sanchez' }, { nombre: 'Lupita', apellido: 'Reyna' }];
        }
        else {
            return [{ nombre: 'Paulo', apellido: 'Sanchez' }, { nombre: 'Eleazar', apellido: 'Reyna' }];
        }
    };
    EstudiantesComponent.prototype.alerta = function () {
        alert("si funciona");
    };
    EstudiantesComponent.prototype.cambiar = function (evento) {
        this.titulo = evento.target.value;
    };
    EstudiantesComponent.prototype.listaMaterias = function () {
        if (this.materias == "10") {
            return ['Literatura', 'Quimica'];
        }
        else {
            return ['Español', 'Mate'];
        }
    };
    EstudiantesComponent.prototype.listaMaestros = function () {
        return ['David', 'Ernesto'];
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
        core_1.Input('mis-maestros'),
        __metadata("design:type", String)
    ], EstudiantesComponent.prototype, "maestros", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], EstudiantesComponent.prototype, "seleccionados", void 0);
    EstudiantesComponent = __decorate([
        core_1.Component({
            selector: 'estudiantes',
            templateUrl: 'app/templates/estudiantes.templates.html',
            providers: [estudiantes_service_1.EstudiantesService]
        }),
        __metadata("design:paramtypes", [estudiantes_service_1.EstudiantesService])
    ], EstudiantesComponent);
    return EstudiantesComponent;
}());
exports.EstudiantesComponent = EstudiantesComponent;
//# sourceMappingURL=estudiantes.components.js.map