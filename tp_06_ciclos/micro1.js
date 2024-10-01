/*

Micro desafío 1:
Instrucciones
1. Crear una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
Saldo Bancario
El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo
de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir
ejecutando cada una de las siguientes consignas para lograr el objetivo:
1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
tomando en cuenta que los depósitos serán representados por valores positivos y
los retiros por valores negativos.
2. Crear una función (Callback) que reciba como parámetro el array creado. La función
tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
actual de retiros y el saldo actual del cliente.
3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
como el array que contiene las operaciones bancarias. Esta función tendrá la
responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
depósitos, el saldo actual de retiros y el saldo actual.
Una vez creado el programa, ejecutalo y para verificar los resultados solicitados, invoca a la
segunda función, asigna diferentes valores o argumentos. No olvides utilizar el
console.log() para mostrar los resultados al usuario, de acuerdo al siguiente mensaje:


*/

const operaciones = [100, -50, 200, -30, 400, -20];

function calcularSaldo(operaciones) {
    let saldoDepositos = 0;
    let saldoRetiros = 0;
    let saldoActual = 0;
  
    operaciones.forEach((operacion) => {
      if (operacion > 0) {
        saldoDepositos += operacion;
      } else {
        saldoRetiros += Math.abs(operacion);
      }
      saldoActual += operacion;
    });
  
    return {
      saldoDepositos,
      saldoRetiros,
      saldoActual,
    };
  }

  function mostrarResultados(nombre, apellido, operaciones) {
    const { saldoDepositos, saldoRetiros, saldoActual } = calcularSaldo(operaciones);
  
    console.log(`Nombre: ${nombre} ${apellido}`);
    console.log(`Saldo total de depósitos: ${saldoDepositos}`);
    console.log(`Saldo actual de retiros: ${saldoRetiros}`);
    console.log(`Saldo actual: ${saldoActual}`);
  }

  mostrarResultados('Eric', 'Pérez', operaciones);

  