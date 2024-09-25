let nombre = "Maximo";
let apellido = "Lencina";
let sueldoActual = 2000;
let porcentajeAumento = 10;
let calculoAumento = (sueldoActual * porcentajeAumento)/100;

let nuevoSueldo = calculoAumento;

//console.log(calculoAumento);
let mensaje =
`Hola, estimado ${nombre} ${apellido}
En base a su sueldoActual:
${sueldoActual}
y un porcentaje de aumento de ${porcentajeAumento}
Ha recibido un aumento del : 
${calculoAumento} 
y su nuevo sueldo es de: 
${sueldoActual + calculoAumento}`
console.log(mensaje);