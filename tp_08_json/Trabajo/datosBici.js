const fs = require ('fs');
const path = require ('path');

const bicicletasJson = path.join(__dirname,  'bicicletas.json');


/* try sirve para tomar cualquier error que pueda ocurrir en la lectura
 o parsing del archivo JSON, si llega a ocurrir un error, 
 la funcion retornara un array vacio[].*/
function importBicicletas() {
    try { 
        const data = fs.readFileSync(bicicletasJson, 'utf8');
        return JSON.parse(data);}
        catch (error) {
            console.error(`Error al importar bicicletas: ${error}`);
            return  [];

        }
    
}

const bicicletasArray = importBicicletas();
console.log(bicicletasArray[0]); 
console.log(bicicletasArray[1]);

module.exports =  importBicicletas;


