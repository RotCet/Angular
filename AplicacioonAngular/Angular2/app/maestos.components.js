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
var MaestrosComponent = (function () {
    function MaestrosComponent() {
        this.maestro = ['Claudia', ['David']];
        this.n = 0;
    }
    MaestrosComponent.prototype.sumar = function () { return this.n + 1; };
    ;
    __decorate([
        core_1.Input('mis-maestros'),
        __metadata("design:type", String)
    ], MaestrosComponent.prototype, "mestros", void 0);
    MaestrosComponent = __decorate([
        core_1.Component({
            selector: 'Maestos',
            template: "\n        <div>Lista de Maestos y su Materia Asignada</div>\n        <h3>{{titulo}}</h3>\n        <br>\n        <ul>\n            <li *ngFor=\"let maestro of maestros\">{{maestro}}<span></span></li>\n        </ul>"
        })
    ], MaestrosComponent);
    return MaestrosComponent;
}());
exports.MaestrosComponent = MaestrosComponent;
//# sourceMappingURL=maestos.components.js.map