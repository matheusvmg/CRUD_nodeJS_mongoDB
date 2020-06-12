const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    id : {
        type: Number,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
})

const usuariosSchema = mongoose.model('usuarios', usuarioSchema)
module.exports = usuariosSchema