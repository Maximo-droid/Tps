/*
Tabla de multiplicar
Uno de los equipos de desarrollo te pide ayuda para desarrollar un código, donde se
pueda visualizar la tabla de multiplicar del 1 al 10. El equipo indica que puedes usar
algunos de los ciclos o bucles aprendidos: for - while o do while,
*/
function multiplicado (numero) {

for (let i = 1; i <= 10; i++) {

console.log(numero + "*" + i + "="+ numero * i);  
}
}

multiplicado (8)