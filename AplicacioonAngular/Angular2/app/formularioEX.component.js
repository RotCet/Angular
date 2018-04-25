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
var forms_1 = require("@angular/forms");
106074310;
var FormularioExComponent = (function () {
    function FormularioExComponent() {
        this.formulario = new forms_1.FormGroup({
            telefono: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern("^.{4,}$"), this.elTelefonoNoEsUnico
            ]),
            direccion: new forms_1.FormControl('', forms_1.Validators.required, this.elTelefonoNoEsUnicoAsync)
        });
    }
    FormularioExComponent.prototype.enviarFormulario = function () {
        alert("Su telefono es: ");
    };
    FormularioExComponent.prototype.elTelefonoNoEsUnico = function (control) {
        var telefonos = ['T4421712804', 'T4686828044'];
        if (telefonos.indexOf(control.value) != -1) {
            return { elTelefonoNoEsUnico: true };
        }
        return null;
    };
    FormularioExComponent.prototype.elTelefonoNoEsUnicoAsync = function (control) {
        return new Promise(function (resolver, rechazar) {
            setTimeout(function () {
                if (control.value === 'Ortonumero') {
                    resolver({ elTelefonoNoEsUnicoAsync: true });
                }
                else {
                    resolver(null);
                }
            }, 2000);
        });
    };
    FormularioExComponent = __decorate([
        core_1.Component({
            selector: 'mi-FormulariosEx',
            templateUrl: 'app/templates/formularioEx.componet.html'
        }),
        __metadata("design:paramtypes", [])
    ], FormularioExComponent);
    return FormularioExComponent;
}());
exports.FormularioExComponent = FormularioExComponent;
//# sourceMappingURL=formularioEx.component.js.map