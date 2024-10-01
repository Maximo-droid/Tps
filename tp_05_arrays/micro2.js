const listaDePeliculas =  [ "sustance", "batman",  "spiderman", "ironman", "Days for her", "meteoro"];

function peliculaElegida(listaDePeliculas) {
    return listaDePeliculas[2].toUpperCase()
    
}

console.log(peliculaElegida(listaDePeliculas))


const listaDePeliculas2 = ["Counter-Strike",    "NOP",    "Vértigo",      "Nick",    "Avatar"]

function peliculaElegida2(listaDePeliculas2) {
    return listaDePeliculas2.split(" ");
}

console.log(listaDePeliculas2);


function eliminar(listaDePeliculas2) {
    listaDePeliculas2.shift()
 return listaDePeliculas2

    
}console.log(eliminar(listaDePeliculas2));

function peliculasCombinadas(listaDePeliculas, listaDePeliculas2) {
    return listaDePeliculas.concat(listaDePeliculas2)

    
}
console.log(peliculasCombinadas(listaDePeliculas, listaDePeliculas2));
