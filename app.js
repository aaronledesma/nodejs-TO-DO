const argv = require("./config/yargs").argv;
const colors = require('colors');
const por_hacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = por_hacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case "listar":
        let listado = por_hacer.Get_list();
        for (let tarea of listado) {
            console.log("---Por hacer---".green);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log("--------------".green);
        }

        break;

    case "actualizar":
        let actualizar = por_hacer.Actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;

    case "borrar":
        let borrado = por_hacer.Borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log("comando no reconocido");
}