"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Computador = (function () {
    function Computador(procesador, memoria) {
        this.procesador = procesador;
        this.memoria = memoria;
    }
    return Computador;
}());
exports.Computador = Computador;
var Procesador = (function () {
    function Procesador() {
        this.cores = 2;
        this.velocidad = '2.5 MHz';
        this.marca = 'Intel';
    }
    return Procesador;
}());
var Memoria = (function () {
    function Memoria() {
        this.gigas = 8;
        this.maraca = 'Sansung';
    }
    return Memoria;
}());
//# sourceMappingURL=inyeccionDependencias.js.map