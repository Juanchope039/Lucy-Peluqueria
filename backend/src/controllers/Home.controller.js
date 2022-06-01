//Ivan necesito el ejemplo de un metodo o pon el metodo vacio y yo lo completo porfa
const ctrl = {}
//const Home = require('../models/Administrador.model')
//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')

ctrl.inicio = async(req,res) => {
    res.json({
        mensaje: "Bienvenido"
    })
}
module.exports = ctrl