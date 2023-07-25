// npm init --yes
// npm install express ejs mysql
// npm install -g nodemon se instalo de forma global

const express = require('express')
const server = express()
const path = require('path')

server.set("view engine", "ejs")

const PORT = process.env.PORT || 8081
const conexion = require('./database/db')
const crud = require('./controller/crud')

server.use(express.urlencoded({extended:false}))
server.use(express.json())
server.use(express.static('./database')) //Modelo
server.use(express.static('./views'))   //Vista
server.use(express.static('./controller'))// Controlador

server.use(express.static(path.join(__dirname, 'public')))

// Inicio Rutas
server.get('/', crud.consultar)
server.get('/crear', (req, res) => {
    res.render('create')
})

/* Creación para doctores
server.get('/', crud.consultar)
server.get('/crearDoc', (req, res) => {
    res.render('createDoc')
})
*/



server.post('/salvar', crud.save)

server.get('/editar/:id', crud.consultarUno)

server.post('/actualizar', crud.actualizar)

server.get('/borrar/:id', crud.delete)
//Fin rutas

server.listen(PORT, () => {
    console.log("Servidor funcionando en http://localhost:8081", PORT)
})
