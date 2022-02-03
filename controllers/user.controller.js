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
// const { emailExiste } = require('../helpers/db-validatiors')

const usuariosGet = async (req, res = response) => {
    const {
        limite = 5, desde = 0
    } = req.query
    const query = {
        estado: true
    }
    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query).skip(Number(desde)).limit(Number(limite)),
    ]);
    res.json({
        total,
        usuarios
    })
}


const usuariosPut = async (req = request, res = response) => {
    const {
        id
    } = req.params
    const {
        _id,
        password,
        google,
        correo,
        ...resto
    } = req.body


    // TODO: validar CONTRA LA BASE DE DATOS

    if (password) {
        // encriptar el password
        const salt = bcryptjs.genSaltSync()
        resto.password = bcryptjs.hashSync(password, salt)
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto, {
        new: true,
        runValidators: true
    })

    res.json(usuario)
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

        // // encriptar el password
        const salt = bcryptjs.genSaltSync()
        usuario.password = bcryptjs.hashSync(password, salt)

        // / guardar el usuario en la base de datos
        await usuario.save()
        res.json({
            msg: 'Usuario registrado',
            usuario
        })

        // console.log(usuario)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hubo un error'
        })
    }
}

const usuariosDelete = async (req, res = response) => {

    const {
        id
    } = req.params
    
    // Borrar fisicamente el registro de la base de datos
    // const usuario = await Usuario.findByIdAndDelete(id)

    // Cambiar el estado del registro a false 
    const usuario = await Usuario.findByIdAndUpdate(id, {
        estado: false
    }, {
        new: true
    })
    res.json({
        message: 'Usuario eliminado',
        usuario,

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