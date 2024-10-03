import peliculas from "./peliculas.js";

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