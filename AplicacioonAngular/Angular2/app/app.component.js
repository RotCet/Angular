"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.laUniversodad = "Universidad Nacional KBAE";
        this.laMateria = "8";
        this.losMaestros = "Maestros";
    }
    AppComponent.prototype.mostrarEstrudiante = function (evento) {
        alert(evento.nombre);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'mi-aplicacion',
            template: "<h1>Bienvenidos</h1>        \n           \n            <estudiantes [mi-universidad]=\"laUniversidad\" \n            [mis-materias]=\"LaMateria\"  [mis-maestros]=\"losMaestros\"\n            (seleccionados)=mostrarEstrudiante($event) \n            ></estudiantes>\n\n            "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map