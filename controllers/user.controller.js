// ******************** Autor ******************************************************
// Autor: Diego Alonso Trujillo
// Webside: https://diego-trujillo-portafolio.herokuapp.com/

// ***********************************************************************************

const {
    response,
    request
} = require('express')
const Usuario = require('../models/usuario.model')
const bcryptjs = require('bcryptjs')
// const

const usuariosGet = (req, res = response) => {
    const {
        q,
        nombre = 'no mane',
        apikey,
        page = 2,
        limit = 12
    } = req.query

    res.json({
        message: 'Get API - controlador usuarios',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPut = (req = request, res = response) => {
    // validar si no hay id en la url
    if (!req.params.id) {
        res.status(400).json({
            message: 'El id es necesario'
        })
    } else {
        const id = req.params.id
        res.json({
            message: 'Put API - controlador usuarios',
            id
        })
    }
}

const usuariosPost = async (req, res = response) => {

    try {

        const {
            nombre,
            correo,
            password,
            rol
        } = req.body
    
        const usuario = new Usuario({
            nombre,
            correo,
            password,
            rol
        })
    
        // validar si el correo existe
        const existeEmail = await Usuario.findOne({
            correo
        })
    
        if (existeEmail) {
            return res.status(400).json({
                msg: 'El correo ya existe'
            })
        }
    console.log(existeEmail)
        // encriptar el password
        const salt = bcryptjs.genSaltSync()
        usuario.password = bcryptjs.hashSync(password, salt)
    
        // / guardar el usuario en la base de datos
        await usuario.save()
    
        res.json({
            // msg: "Usuario guardado  con exito",
            usuario
        })

        console.log(usuario)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Hubo un error' })
        
        
    }
   
}

const usuariosDelete = (req, res = response) => {
    res.json({
        message: 'Delete API - controlador usuarios'
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        message: 'Patch API - controlador usuarios'
    })
}

const usuariosError = (req, res = response) => {
    res.json({
        message: 'ERROR !! API - controlador usuarios'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
    usuariosError
}