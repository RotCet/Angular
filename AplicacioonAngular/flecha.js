var numeros = [1, 2, 3, 4];
//funciones flecha son aquiellas que eliminana funiones y se agrupan en una sola ejecución
console.log(numeros.map(function (n) { return n + 1; }));
function sumarUno(n) {
    return n + 1;
}
//Solo se aplica lo siguiente
console.log(numeros.map(function (n) { return n + 2; }));
numeros.forEach(function (elemento, indice, array) {
    console.log("numeros [" + indice + "]=" + elemento);
});
//más funciones flecha
var multiplicar = function (a, b) { return a * b; };
var saludar = function () { console.log('Hola'); };
console.log(multiplicar);
console.log(saludar);
