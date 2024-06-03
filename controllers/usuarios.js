const { response } = require('express');

const usuariosGet = (req, res = response) => {

   const {q, name = "No name", apitoken, page = 1, limit} = req.query;

    res.json({
        ok: true,
        msg: 'get API - Controlador',
        q,
        name,
        apitoken, 
        page,
        limit
    });
}


const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.json({
        nombre,
        edad
    });
}


const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.json({
        ok: true,
        msg: 'put API - Controlador',
        id
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        ok: true,
        msg: 'patch API - Controlador'
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API - Controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}