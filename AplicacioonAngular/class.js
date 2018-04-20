//para nombrar clase se nombra con mayus
var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.saludar = function () {
        console.log('Hola mi nombre es:' + this.nombre + ' ' + this.apellido);
    };
    return Persona;
}());
//tener acceso a las propiedades de la clase y asignarle datos
var estudiante = new Persona();
estudiante.nombre = 'Rouse';
estudiante.apellido = 'KBAE';
estudiante.saludar();
