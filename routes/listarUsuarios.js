const express = require('express')
const listarUsuarios = express.Router()
const usuariosSchema = require('../model/schema')

//lista os usuários cadastrados
listarUsuarios.get('/listar-usuarios', async(req, res) => {
    try{
        const usuariosListados = await usuariosSchema.find()
        res.json(usuariosListados)
    }catch(err){
        res.json(err)
    }
})

module.exports = listarUsuarios 