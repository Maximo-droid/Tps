/*
Desarrolla el programa Ajuste tarifario de energía eléctrica. Utilizando el
operador condicional ternario, queremos determinar cuánto va a pagar un hogar
según su consumo. Veamos los pasos a seguir…

a. Crear una variable “pagoMes” y asignarle un pago actual de energía
eléctrica por mes.

b. Crear otra variable “consumoKWH” y asignarle un consumo mensual de
Kilovatios hora de consumo mensual por el hogar.

c. Si en el hogar se consumen más de 300 kwh por mes, entonces al pago
actual se le incrementará un 20%.

d. En el caso contrario se le mantendrá el subsidio, es decir que no tendrá
ningún aumento.

e. Una vez obtenido el monto del pago por consumo mostrar al usuario este
mensaje: “Debido a que su hogar tuvo un consumo de 450kwh, en
base al ajuste tarifario (hogares con consumo mayor a 300kwh por
mes tendrán un aumento del 20%), cumplimos con informarle que se
ha ajustado el total a pagar, que será de $14400
*/
let pagoMes = 12000;
let consumoKWH = 310;
let limiteDeKWH = 300;
let cuenta
let respuestaUsuario = "";

cuenta = pagoMes + ((20/100)*pagoMes);


if (consumoKWH > limiteDeKWH) { respuestaUsuario = "Debido a que su hogar tuvo un consumo de " + 
    consumoKWH + ", en base al ajuste tarifario (20%) le informamos que su valor total a pagar es " + 
    cuenta
} else if (consumoKWH < limiteDeKWH) { respuestaUsuario = "A causa de que usted figura con un consumo menor al limite de " + 
    limiteDeKWH + "KWH se mantedra su subsidio. Su saldo a pagar es de " + pagoMes

}

console.log(respuestaUsuario);