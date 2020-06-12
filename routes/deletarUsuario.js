const express = require('express')
const deletarUsuarios = express.Router()
const usuariosSchema = require('../model/schema')

//deleta um usuário
deletarUsuarios.delete('/deletar-usuario/:id', async (req, res) => {
    try{
        const usuarioDeletado = await usuariosSchema.remove({
            id: req.params.id
        })
        res.json(usuarioDeletado)
    }catch(err){
        res.json(err)
    }
})

module.exports = deletarUsuarios