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
    //mostrarEstrudiante(evento):void{
    // alert(evento.nombre);
    //Menú     
    // }
    AppComponent.prototype.mostrarEstrudiante = function () {
        // alert(evento.nombre);
        //Menú     
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'mi-aplicacion',
            template: "\n  <div class=\"container\">  \n    <div class=\"container-fluid\" style=\"color:#000000;height:80px; text-align:right; \">       \n    <h1>Bienvenidos </h1>\n    \n    </div> \n  </div>\n           <div class=\"container\"> \n              <ul  class=\"nav nav-tabs\">\n                <li  (click)=\"pais='Home'\" ><a [routerLink]=\"['/']\"><i class=\"glyphicon glyphicon-home\"></i>Home</a></li>\n                <li (click)=\"pais='Otro'\"><a [routerLink]=\"['inicio']\"  routerLinkActive=\"active\"><i class=\"glyphicon glyphicon-ok-sign\"></i>Inicio</a></li>\n                <li (click)=\"pais='argentina'\"><a [routerLink]=\"['/']\" ><i class=\"glyphicon glyphicon-user\"></i>Datos Personales</a></li>\n                <li (click)=\"pais='bolivia'\"><a [routerLink]=\"['/']\"  ><i class=\"\tglyphicon glyphicon-pencil\"></i>Datos Generales</a></li>               \n                <li (click)=\"pais='nosotros'\"><a [routerLink]=\"['nosotros']\"  routerLinkActive=\"active\"><i class=\"glyphicon glyphicon-apple\"></i>Nosotros</a></li>\n                <li (click)=\"pais='contactanos'\"><a [routerLink]=\"['contactanos']\"  routerLinkActive=\"active\"><i class=\"glyphicon glyphicon-earphone\"></i>Contactanos</a></li>\n              </ul>\n           </div>    \n           <router-outlet></router-outlet>       \n           <div  class=\"container\" [ngSwitch]=\"pais\" >\n      \n               \n                <div *ngSwitchCase=\"'Otro'\">\n\n              </div>          \n              <div *ngSwitchCase=\"'argentina'\" class=\"panel panel-default\"><span  class=\"panel-heading\">DATOS PERSONALES</span>\n              <br> <mi-Formularios></mi-Formularios> \n              </div>\n              <div *ngSwitchCase=\"'bolivia'\" class=\"panel panel-default\"><span  class=\"panel-heading\">DATOS GENERALES</span>\n              <br>\n                  <mi-FormulariosEx></mi-FormulariosEx> \n              </div>\n              \n              <div *ngSwitchCase=\"'nosotros'\"></div>\n              <div *ngSwitchCase=\"'contactanos'\"></div>\n             \n              <div *ngSwitchDefault > \n              <div class=\"jumbotron\">  \n                    <div class=\"btn btn-danger\" > La temperatura es \n                      <span [ngClass]=\"{'text-danger':temperatura> 30, 'text-warning':temperatura<=30}\" >\n                        {{temperatura | aFahrenheit:2}} \u00B0F\n                      </span>\n                    </div>\n                    <div class=\"btn btn-primary btn-block\">\n                            El status del empleado es: {{status| aStatus}}\n                   </div>    \n                   </div>               \n                  <br>\n                  <estudiantes [mi-universidad]=\"laUniversidad\" \n                [mis-materias]=\"LaMateria\"  [mis-maestros]=\"losMaestros\"\n                (seleccionados)=mostrarEstrudiante($event) \n                ></estudiantes>\n              </div>\n           </div>  \n          \n           "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map