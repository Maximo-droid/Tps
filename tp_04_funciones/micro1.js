/*
Crea una función que permita calcular el monto a pagar por el alquiler de un
vehículo, que reciba como parámetros: “tipo de vehículo”, “Días de alquiler” y
“silla para bebe”.
3. Define y realiza los cálculos para obtener el total a pagar, teniendo en cuenta
las siguientes consideraciones:
a. De acuerdo al tipo de vehículo, se le cobra al cliente un monto por día:
i. Compacto: $14000
ii. Mediano: $17000
iii. Camioneta: $28000
*/

function alquilerVehiculo(tipoV, diasAlq, sillaBebe) {
const precios = {
compacto : 14000,
mediano : 17000,
camioneta : 28000
};
const sillaDeBebePrecio = 1200;

const costoPorDia = precios[tipoV.toLowerCase()];

if (costoPorDia === undefined) {
    return "Tipo de vehículo no valido.";

}

let total = costoPorDia * diasAlq;
if (sillaBebe) { total += sillaDeBebePrecio * diasAlq;
    
}


let mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoV}, considerando los ${diasAlq} 
días utilizados, el monto total será de $${total}.`;
if (sillaBebe)  {
  mensaje += " Tambien se incluye el asiento para bebe." 

} 
 return mensaje  ;
}

console.log(alquilerVehiculo("compacto", 2, true));


//esoooooooo