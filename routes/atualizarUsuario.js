const express = require('express')
const atualizarUsuarios = express.Router()
const usuariosSchema = require('../model/schema')

//atualiza um usuário
atualizarUsuarios.put('/atualizar-usuario/:id', async(req, res) => {
    try{
        const usuarioAtualizado = await usuariosSchema.updateOne(
            {id: req.params.id},
            {$set: {nome: req.body.nome, 
                    sobrenome: req.body.sobrenome,
                    email: req.body.email,
                    idade: req.body.idade,
                    senha: req.body.senha}})
        res.json(usuarioAtualizado)
    }catch(err){
        res.json({
            error: err
        })
    }
})

module.exports = atualizarUsuarios