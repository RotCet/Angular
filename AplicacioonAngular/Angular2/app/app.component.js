"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//pipes o filtros
var AppComponent = (function () {
    function AppComponent() {
        this.temperatura = 20;
        this.laUniversodad = "Universidad Nacional KBAE";
        this.laMateria = "8";
        this.losMaestros = "Maestros";
    }
    AppComponent.prototype.mostrarEstrudiante = function (evento) {
        alert(evento.nombre);
        //Menú
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'mi-aplicacion',
            template: "<h1>Bienvenidos</h1>        \n           <div class=\"container\"> \n              <ul class=\"nav nav-tabs\">\n                <li (click)=\"pais='argentina'\"><a>Argentina</a></li>\n                <li (click)=\"pais='bolivia'\"><a>Bolivia</a></li>\n                <li (click)=\"pais='brazil'\"><a>Brazil</a></li>\n                <li (click)=\"pais='chile'\"><a>Chile</a></li>\n              </ul>\n           </div>\n           \n           <div  class=\"container\" [ngSwitch]=\"pais\">\n                <div class=\"jumbotron\"> La temperatura es \n                <span [ngClass]=\"{'text-danger':temperatura > 30, 'text-warning':temperatura<=30}\">\n                  {{temperatura | aFahrenheit:2}} \u00B0F\n                </span>\n                </div>\n              <div *ngSwitchCase=\"'argentina'\">Informaci\u00F3n de Argentina</div>\n              <div *ngSwitchCase=\"'bolivia'\">Informaci\u00F3n de Bolivia</div>\n              <div *ngSwitchCase=\"'brazil'\">Informaci\u00F3n de Brazil</div>\n              <div *ngSwitchCase=\"'chile'\">Informaci\u00F3n de Chile</div>\n              <div *ngSwitchDefault class=\"jumbotron\">\n                  <estudiantes [mi-universidad]=\"laUniversidad\" \n                [mis-materias]=\"LaMateria\"  [mis-maestros]=\"losMaestros\"\n                (seleccionados)=mostrarEstrudiante($event) \n                ></estudiantes>\n              </div>\n           </div>\n           \n            \n\n\n            "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map