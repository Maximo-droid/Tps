import importBicicletas from "./datosBici";

const dhBici  = {
    bicicletas : importBicicletas(),
buscarBici :  function(id) {
    return this.bicicletas.filter(bici  => bici.id === id)[0] || null;
  }
}


