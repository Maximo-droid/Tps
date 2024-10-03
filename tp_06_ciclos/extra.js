/*Crear una función que pida un valor 
por parámetro y muestre los 10 números
siguientes*/

function cicloDiez(num) {
 

    for (let i = 1; i <= 10; i++) {


          (num + i);
          console.log("Next number :  " + i); 
    }
    
   return 
} 

cicloDiez(1);



console.log("==================================="); // Línea de separación


/*Imprimir los números entre 
el 1 y el 57, saltando de tres en tres*/ 


function I3(num) {
    for (let i = 0; i <= 57 ; i += 3) {
        (num + i);
        console.log("Next number :  " + i);
}

return

}

I3(0);

console.log("==================================="); // Línea de separación

/*Escribir un programa que muestre 
la sumatoria de todos los números 
entre el 0 y el
100*/

function suma() {
    let total = 0;
    for (let i = 0; i <= 100; i++) {
    total += i;

    }
    return total
    }

    console.log("la sumatoria de todos los números entre el 0 y el 100 es: " + suma());
    
console.log("==================================="); // Línea de separación


/*. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
las letras de la cadena de texto pero en MAYÚSCULA*/

function mayuscula(texto) {
texto = "hola, buen dia"
console.log("sin mayúscula: " + texto);
console.log("-------------------------------------");
console.log("Con mayúscula:  " + texto.toUpperCase());
return mayuscula
}

mayuscula()

console.log("==================================="); // Línea de separación


function soloPares(array) {
    const pares = [];
    for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) { 
        pares.push(array[i]);
        
    }
    
}
return pares;
}
let numeros = [1, 2, 3, 4, 5, 6, 7,  8, 9, 10, 11, 12, 13, 14, 15, 16];
const pares = soloPares(numeros);
console.log(pares);

