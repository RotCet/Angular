var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//para nombrar clase se nombra con mayus
var Persona = /** @class */ (function () {
    //Agrega constructor
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log('Hola mi nombre es:' + this.nombre + ' ' + this.apellido);
        console.log("Hola, como estas mi nombre es:\n                    " + this.nombre + "\n                    " + this.apellido);
    };
    return Persona;
}());
//herencia se hace la extención de la Clase
var Trabajador = /** @class */ (function (_super) {
    __extends(Trabajador, _super);
    function Trabajador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trabajador.prototype.horaDeEntrada = function () {
        console.log('Mi hora de entrada es 8 am');
    };
    return Trabajador;
}(Persona));
//tener acceso a las propiedades de la clase y asignarle datos
//var estudiante:Persona=new Persona('Rouse','KBAE',0);
//estudiante.saludar();
var trabajador = new Trabajador('Juan Carlos', 'Gnzalez', 34);
trabajador.numeroEmpleado = 2594;
trabajador.horaDeEntrada();
