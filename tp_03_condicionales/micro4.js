

/*
Desarrollar el programa mi primera calculadora. Queremos que, usando estructura
switch, muestres al usuario cuál es el resultado de una operación aritmética. Esto se
hará en base a dos valores suministrados y al tipo de operación indicada: “sumar”,
“restar”, “multiplicar”, “dividir”.
Por ejemplo: si el usuario indica que quiere sumar los valores 2 y 2, entonces la
respuesta al usuario debe ser: “El resultado de sumar 2 + 2 es 4”.
3. En caso de que la operación aritmética sea distinta a la esperada, deberás mostrarle un
mensaje al usuario que le informe que “Las operaciones aceptadas son: sumar -
restar- multiplicar- dividir”.
*/

// Primero Asignar variables
let resultado = ""; 
let operador = "+";
let numero1 = 8;
let numero2 = 2;
let operadorSRMD 

switch (operador) {
    case "-":  resultado = numero1 - numero2, operadorSRMD = "restar";
        
        break;
        case "+": resultado = numero1 + numero2, operadorSRMD = "sumar";
        break;
        case "*": resultado =  numero1 * numero2, operadorSRMD = "multiplicar";  
            break;
            case "/":  resultado = numero1 / numero2, operadorSRMD = "dividir"; 
            break;

    default: "Las operacioness aceptadas son: Sumar ---- Restar ---- Multiplicar ---- Dividir."
        break;
}

console.log("El resultado de", operadorSRMD, numero1, "con", numero2, "es", resultado);