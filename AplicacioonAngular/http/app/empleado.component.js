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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var empleado_service_1 = require('./empleado.service');
var EmpleadoComponent = (function () {
    function EmpleadoComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    EmpleadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        this.service.informacionEmpleado(id)
            .then(function (respuesta) { return _this.empleado = respuesta; });
    };
    EmpleadoComponent = __decorate([
        core_1.Component({
            template: "<div *ngIf=\"empleado\">\n                Nombre: {{ empleado.name }}\n                <br/>\n                Correo Electr\u00F3nico: {{ empleado.email }}\n              </div>"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, empleado_service_1.EmpleadoService])
    ], EmpleadoComponent);
    return EmpleadoComponent;
}());
exports.EmpleadoComponent = EmpleadoComponent;
//# sourceMappingURL=empleado.component.js.map