const peliculas = require("./peliculas.js");



function mostrarPelis() {
    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
        console.log(`ID: ${pelicula.id}`);
        console.log(`Título: ${pelicula.titulo}`);
        console.log(`Calificación: ${pelicula.rating}`);
        console.log(`Premios: ${pelicula.premios}`);
        console.log(`Duración: ${pelicula.duración}`);
        console.log(`Precio: $${pelicula.precio}`);
        console.log(`Género: ${pelicula.genero}`);
        console.log('-----------------------');
    }
    
    
}

mostrarPelis();

console.log("==================================="); // Línea de separación

const fs = require('fs');

 fs.readFile('./mensaje.txt', 'utf8', (error, data) => {
 if (error) {
    console.error('Error  al leer el archivo:', error);
    return;

    
 }
console.log('Contenido del archivo:  ', data);


 })




