/*

El teach leader de la empresa nos pide construir un sistema para un local de
venta de comida rápida. Los clientes eligen el tipo de hamburguesa base con un
precio base y, por cada selección que el cliente agregue, se le suma el valor de su
selección al precio

*/

function totalPagado(burguer, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    const burguers = {
        carneparrillera: 1800,
        pollo: 1500,
        vegetariana: 1200
    };

    const tipoC = burguer.toLowerCase();
    let total = burguers[tipoC] || 0;

    const adicionales = {
        jamon: 30,
        queso: 25,
        salsaDeTomate: 5,
        mayonesa: 5,
        mostaza: 5,
        tomate: 15,
        lechuga: 10,
        cebolla: 10
    };

    total += (jamon ? adicionales['jamon'] : 0);
    total += (queso ? adicionales['queso'] : 0);
    total += (salsaDeTomate ? adicionales['salsaDeTomate'] : 0);
    total += (mayonesa ? adicionales['mayonesa'] : 0);
    total += (mostaza ? adicionales['mostaza'] : 0);
    total += (tomate ? adicionales['tomate'] : 0);
    total += (lechuga ? adicionales['lechuga'] : 0);
    total += (cebolla ? adicionales['cebolla'] : 0);

    return total;
}

function mensajes(nombre, apellido, tipoC, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    const total = totalPagado(tipoC, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla);
    const mensaje = `Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${total}`;

    console.log(mensaje);
}

mensajes('Máximo', 'Lencina', 'carneparrillera', true, true, true, true, true, true, true, true);
