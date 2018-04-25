"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var estudiantes_components_1 = require("./estudiantes.components");
var maestos_components_1 = require("./maestos.components");
var aFahrenheit_pipe_1 = require("./aFahrenheit.pipe");
var aStratus_pipes_1 = require("./aStratus.pipes");
var formulario_component_1 = require("./formulario.component");
var formularioEx_component_1 = require("./formularioEx.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_2.ReactiveFormsModule],
            declarations: [app_component_1.AppComponent, estudiantes_components_1.EstudiantesComponent, maestos_components_1.MaestrosComponent, aFahrenheit_pipe_1.AFahrenheitPipe, aStratus_pipes_1.AStatus, formulario_component_1.FormularioComponent, formularioEx_component_1.FormularioExComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map