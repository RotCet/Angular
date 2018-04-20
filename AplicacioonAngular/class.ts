//para nombrar clase se nombra con mayus
class Persona{
    nombre:string;
    apellido:string;
    edad: number;
    //Agrega constructor
    constructor(nombre:string, apellido: string, edad:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
    saludar():void{
        console.log('Hola mi nombre es:' + this.nombre + ' ' +this.apellido);
        console.log(`Hola, como estas mi nombre es:
                    ${this.nombre}
                    ${this.apellido}`);
    }
}
//herencia se hace la extención de la Clase
class Trabajador extends Persona{
    numeroEmpleado: number;
    horaDeEntrada(){
        console.log('Mi hora de entrada es 8 am');
    }
}
//tener acceso a las propiedades de la clase y asignarle datos
//var estudiante:Persona=new Persona('Rouse','KBAE',0);
//estudiante.saludar();

var trabajador:Trabajador=new Trabajador('Juan Carlos','Gnzalez',34);
trabajador.numeroEmpleado=2594;
trabajador.horaDeEntrada();
