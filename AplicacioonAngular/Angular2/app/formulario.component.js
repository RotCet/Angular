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
var router_1 = require("@angular/router");
//pipes o filtros
var FormularioComponent = (function () {
    function FormularioComponent(router) {
        this.router = router;
        this.estudiante = { nombre: 'Rouse', correo: 'grousss@hotmail.com' };
    }
    FormularioComponent.prototype.enviarFormulario = function (formulario) {
        alert("Usuario:" + formulario.value.nombre);
    };
    FormularioComponent = __decorate([
        core_1.Component({
            selector: 'mi-Formularios',
            templateUrl: 'app/templates/formulario.component.html',
            styles: ["\n             input.ng-invalid.ng-touched{\n                 border-left:3px solid red;\n                 color: red;\n             }\n             input.ng-valid{\n                border-left:3px solid green;\n                color: black;\n             }"]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], FormularioComponent);
    return FormularioComponent;
}());
exports.FormularioComponent = FormularioComponent;
//# sourceMappingURL=formulario.component.js.map