
//variables
//cuando se utiliza LET en un for tomará las variables solo en esa sección y lo que esté fuera de el es otra variable aun que s ellamen igual

var i=0;
for(let i=0; i<5; i++)
{
console.log(`---${i}`);
}
console.log(i);