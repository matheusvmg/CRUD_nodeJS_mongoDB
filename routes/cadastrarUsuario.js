const express = require('express')
const cadastrarUsuarios = express.Router()
const usuariosSchema = require('../model/schema')

//cadastra um usuário
cadastrarUsuarios.post('/cadastrar-usuario', async (req, res) => {
    const usuario = new usuariosSchema({
        id: req.body.id,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        idade: req.body.idade,
        senha: req.body.senha
    })

    try{
        const data = await usuario.save()
        res.json(data)
    }catch(err){
        res.json({
            error: err
        })
    }
})

module.exports = cadastrarUsuarios