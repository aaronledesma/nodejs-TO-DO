const descripcion = {
    alias: "d",
    demand: true
};

const completado = {
    alias: "c",
    default: true,
};

const argv = require("yargs")
    .command("crear", "Crea una tarea por hacer", {
        descripcion
    })
    .command("actualizar", "Actualiza una tarea por hacer", {
        descripcion,
        completado
    })
    .command("borrar", "Borra una tarea por hacer", {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};