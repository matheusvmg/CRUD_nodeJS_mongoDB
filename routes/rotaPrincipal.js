const express = require('express')
const principal = express.Router()

//rota principal
principal.get('/', (req, res) => {
    res.json({
        "resposta": "rota principal"
    })
})

module.exports = principal