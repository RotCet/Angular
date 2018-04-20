var numeros:Array<number>=[1,2,3,4];


//funciones flecha son aquiellas que eliminana funiones y se agrupan en una sola ejecución
console.log(numeros.map(function(n){return n+1}));
function sumarUno(n){
    return n+1;
}


//Solo se aplica lo siguiente

console.log(numeros.map((n) => n+2));