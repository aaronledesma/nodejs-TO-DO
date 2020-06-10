const fs = require('fs');

let listado_por_hacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listado_por_hacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error("No se pudo guardar", err);
    });

};

const cargarDB = () => {

    try {
        listado_por_hacer = require("../db/data.json");
    } catch (err) {
        listado_por_hacer = [];
    }


};

const crear = (descripcion) => {

    cargarDB();

    let por_hacer = {
        descripcion,
        completado: false
    };

    listado_por_hacer.push(por_hacer);

    guardarDB();

    return por_hacer;
};

const Get_list = () => {
    cargarDB();
    return listado_por_hacer;
};

const Actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listado_por_hacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listado_por_hacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const Borrar = (descripcion) => {
    cargarDB();

    let nueva_lista = listado_por_hacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listado_por_hacer.length === nueva_lista.length) {
        return false;
    } else {
        listado_por_hacer = nueva_lista;
        guardarDB();
        return true;
    }



};

module.exports = {
    crear,
    Get_list,
    Actualizar,
    Borrar
}