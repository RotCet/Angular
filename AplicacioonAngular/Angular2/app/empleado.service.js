"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arreglo_empleado_1 = require("./arreglo.empleado");
var EmpleadoService = (function () {
    function EmpleadoService() {
    }
    EmpleadoService.prototype.listaEmpleados = function () {
        return arreglo_empleado_1.EMPLEADOS;
    };
    EmpleadoService.prototype.informacionEmpleado = function (id) {
        return arreglo_empleado_1.EMPLEADOS.find(function (empleado) { return empleado.id === id; });
    };
    return EmpleadoService;
}());
exports.EmpleadoService = EmpleadoService;
//# sourceMappingURL=empleado.service.js.map