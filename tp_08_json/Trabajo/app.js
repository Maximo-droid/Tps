const { importBicicletas } = require("./datosBici");

  const dhBici = {
    bicicletas: importBicicletas(),
    buscarBici: function(id) {
      return this.bicicletas.filter(bici => bici.id === id)[0] || null;
    },
    venderBici: function(id) {
      if (id === null) {
        return "Bicicleta no encontrada";
      }
      const bicicleta = this.buscarBici(id);
      if (bicicleta) {
        if (bicicleta.vendida === "si") {
          return "La bicicleta ya fue vendida";
        } else {
          bicicleta.vendida = "no";
          return bicicleta;
        }
      } else {
        return "Bicicleta no encontrada";
      }
    },
    totalDeVentas: function() {
      return this.bicicletas.reduce((acumulado, bicicleta) => {
        if (bicicleta.vendida === "si") {
          return acumulado + bicicleta.precio;
        } else {
          return acumulado;
        }
      }, 0);
    },
    aumentoBici: function(porcentaje) {
      return this.bicicletas.map(bicicleta => {
        const aumento = (bicicleta.precio * porcentaje) / 100;
        return { ...bicicleta, precio: bicicleta.precio + aumento };
      });
    },
    biciPorRodado: function(rodado) {
      return this.bicicletas.filter(bicicleta => bicicleta.rodado === rodado);
    },
  listarTodasLasBici: function() {
    console.log("Listado de bicicletas:");
    console.log("------------------------");
    this.bicicletas.forEach(bicicleta => {
      console.log(`ID: ${bicicleta.id}`);
      console.log(`Marca: ${bicicleta.marca}`);
      console.log(`Modelo: ${bicicleta.modelo}`);
      console.log(`Rodado: ${bicicleta.rodado}`);
      console.log(`Año: ${bicicleta.anio}`);
      console.log(`Color: ${bicicleta.color}`);
      console.log(`Peso: ${bicicleta.peso}`);
      console.log(`Tipo: ${bicicleta.tipo}`);
      console.log(`Precio: ${bicicleta.precio}`);
      console.log(`Vendida: ${bicicleta.vendida}`);
      console.log("------------------------");
    });
  }
};

  
 /* console.log(dhBici.venderBici(3)); 
console.log(dhBici.venderBici(5));
*/
//console.log(dhBici.biciParaLaVenta())
//console.log(dhBici.totalDeVentas());
//console.log(dhBici.aumentoBici(10));
//console.log(dhBici.biciPorRodado(29));
dhBici.listarTodasLasBici();

module.exports = dhBici;