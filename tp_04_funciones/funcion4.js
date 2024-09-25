/*Crear una función que calcule el valor de una hora de trabajo, teniendo en cuenta
que dicha función recibe tres parámetros: El salario mensual, la cantidad de días
trabajados y la cantidad de horas que regularmente trabajada por día.*/

function valorUnaHora(SM, DT, CH) {
    const horasTotal = DT * CH;

    let valorHora;
    if (horasTotal > 0) {
        valorHora = SM / horasTotal;
    } else {
        valorHora = 0; 
    }

    return valorHora;
}


const salario = 465000; // Salario mensual
const dias = 30;      // Días trabajados
const horas = 6;      // Horas trabajadas por día

const valorHora = valorUnaHora(salario, dias, horas);
console.log(`El valor de la hora de trabajo es: ${valorHora}`);


