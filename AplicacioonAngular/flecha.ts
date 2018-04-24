var numeros:Array<number>=[1,2,3,4];


//funciones flecha son aquiellas que eliminana funiones y se agrupan en una sola ejecución
console.log(numeros.map(function(n){return n+1}));
function sumarUno(n){
    return n+1;
}


//Solo se aplica lo siguiente

console.log(numeros.map((n) => n+2));
numeros.forEach((elemento,indice,array)=>{
    console.log(`numeros [${indice}]=${elemento}`);
})

//más funciones flecha
var multiplicar=(a,b)=> a*b;
var saludar=() => {console.log('Hola')};

console.log(multiplicar);
console.log(saludar);