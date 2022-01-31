const { response, request } = require("express");

const usuariosGet = (req, res = response) => {

const { q, nombre = 'no mane', apikey, page = 2,limit = 12} = req.query;

    res.json({
        message: "Get API - controlador usuarios",
        q,
        nombre,
        apikey,
        page,
        limit
    });
};

const usuariosPut = (req = request, res = response) => {
    // validar si no hay id en la url
    if (!req.params.id) {
        res.status(400).json({
            message: "El id es necesario",
        });
    } else {
        const id = req.params.id;
        res.json({
            message: "Put API - controlador usuarios",
            id,
        });
    }
};
//  
//             const id = req.params.id;

//             res.json({
//                 message: "Put API - controlador usuarios",
//                 id,
//             });
//             

const usuariosPost = (req, res = response) => {
    const body = req.body;
    res.json({
        message: "Post API - controlador usuarios",
        body,
    });

    console.log(body);
};

const usuariosDelete = (req, res = response) => {
    res.json({
        message: "Delete API - controlador usuarios",
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        message: "Patch API - controlador usuarios",
    });
};

const usuariosError = (req, res = response) => {
    res.json({
        message: "ERROR !! API - controlador usuarios",
    });
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
    usuariosError,
};
