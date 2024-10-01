
console.log("He definido un array que contiene seis productos de electrodomésticos: ");

const electrodomesticos = 
[ 
    "licuadora", "lavaropas",
     "cafetera", "procesadora"
    , "aspiradora", "tostadora"
];
console.log(electrodomesticos);

console.log("acceder a diferentes elementos del array: ");

console.log(electrodomesticos[1]);
console.log(electrodomesticos[3]);
console.log(electrodomesticos[5]);
//--------------------------------------------------------------
console.log("extraer el primer elemento del array y agregarlo al final: ");

console.log("Antes: " + electrodomesticos);

const electrodoM = electrodomesticos.shift();
electrodomesticos.push(electrodoM);
console.log("Ahora :");

console.log(electrodomesticos);

//----------------------------------------------------------------
console.log("agregar dos nuevos productos al final del array: ");

electrodomesticos.push("batidora", "balanza");
console.log(electrodomesticos);

//----------------------------------------------------------------
console.log("mostrar la cantidad de elementos: ");

console.log(electrodomesticos.length);

//----------------------------------------------------------------
console.log("Buscar un elemento del array y crear una condición responsable de establecer si existe o no el producto dentro del array: ");

const electrodoBuscado = "lavaropas";

if (electrodomesticos.includes(electrodoBuscado)) {
    console.log("Producto encontrado : " +  electrodoBuscado);
    
} else {
    console.log("Producto no encontrado : " + electrodoBuscado);
    
};


//----------------------------------------------------------------
console.log("Unificar todos los elementos del array");


const cadenaDeTexto = electrodomesticos.join(" ");

console.log(cadenaDeTexto);
//----------------------------------------------------------------
console.log("Determinar la cantidad de elementos que posee la cadena de texto obtenida: ");

const cantidadDeElementos = cadenaDeTexto.split(" ").length;
console.log(cantidadDeElementos); 
//----------------------------------------------------------------
console.log("Cambiar el nombre de algún producto de la cadena de texto por otro: ");

const nuevoElectrodo =  "microondas";
const electrodoAlterado = cadenaDeTexto.replace("Heladera", nuevoElectrodo )
console.log(electrodoAlterado);
//----------------------------------------------------------------
console.log("generar un nuevo array con cada una de las palabras de la cadena de texto: ");

const nuevoArray = electrodoAlterado.split(" ");
console.log(nuevoArray);

