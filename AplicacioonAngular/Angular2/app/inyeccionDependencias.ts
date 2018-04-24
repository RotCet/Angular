export class Computador{
    public procesador:Procesador;
    public memoria:Memoria;
    constructor(procesador:Procesador,memoria:Memoria){
        this.procesador=procesador;
        this.memoria=memoria;
    }
}
class Procesador{
    cores=2;
    velocidad='2.5 MHz';
    marca='Intel';
}
class Memoria{
    gigas=8;
    maraca='Sansung';
}