"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EstudiantesService = (function () {
    function EstudiantesService() {
    }
    EstudiantesService.prototype.listaEstudiantes = function (universidad) {
        if (universidad == "Universidad Nacional KBAE") {
            return ['Karina', 'Lupita'];
        }
        else {
            return ['Juan Paulo', 'Ruben'];
        }
    };
    return EstudiantesService;
}());
exports.EstudiantesService = EstudiantesService;
//# sourceMappingURL=estudiantes.service.js.map