const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dbconfig = 'mongodb://localhost:27017/usuarios'
const principal = require('./routes/rotaPrincipal')
const listarUsuarios = require('./routes/listarUsuarios')
const cadastarUsuario = require('./routes/cadastrarUsuario')
const deletarUsuario = require('./routes/deletarUsuario')
const atualizarUsuario = require('./routes/atualizarUsuario')
const cors = require('cors')

const app = express()
const porta = 3333

//middleware's
app.use(cors())
app.use(bodyParser.json())
app.use(principal)
app.use(listarUsuarios)
app.use(cadastarUsuario)
app.use(atualizarUsuario)
app.use(deletarUsuario)

//conexão com o banco de dados
mongoose.connect(dbconfig, { useNewUrlParser: true }, () => {
    try{
        console.log('conectado ao banco de dados')
    }catch(err){
        console.log(err)
    }
})

//servindo a minha aplicação
app.listen(porta, () => {
    try{
        console.log(`servidor está rodando na porta ${porta}`)
    }catch(err){
        console.log(err)
    }
})