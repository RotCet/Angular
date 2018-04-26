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
var empleado_service_1 = require("../empleado.service");
var ContactenosComponent = (function () {
    function ContactenosComponent(empleadoService) {
        this.empleadoService = empleadoService;
    }
    ContactenosComponent.prototype.listaDeEmpleados = function () {
        this.empleados = this.empleadoService.listaEmpleados();
    };
    ContactenosComponent.prototype.ngOnInit = function () {
        this.listaDeEmpleados();
    };
    ContactenosComponent = __decorate([
        core_1.Component({
            templateUrl: './app/templates/contactenos.component.html'
        })
        //agrega interface implements OnInit
        ,
        __metadata("design:paramtypes", [empleado_service_1.EmpleadoService])
    ], ContactenosComponent);
    return ContactenosComponent;
}());
exports.ContactenosComponent = ContactenosComponent;
//# sourceMappingURL=contactenos.component.js.map