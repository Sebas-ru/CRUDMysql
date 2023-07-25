const express = require('express')
const conexion = require('../database/db')

exports.consultar = (req, res) => {
    conexion.query('SELECT * FROM info_personas',(error,consulta) => {
        if(error){
            console.log("Error consultando la tabla persona" + error)
            return
        }
        //res.send(consulta)
        res.render('index', {consulta01: consulta})
    })
}

exports.save = (req, res) => {
    const nombrePersonas = req.body.nombrePersonas
    const apellidoPersonas = req.body.apellidoPersonas
    const numeroCedulaPersonas = req.body.numeroCedulaPersonas
    const edadPersonas = req.body.edadPersonas
    const telefonoPersonas = req.body.telefonoPersonas

    var comando = "INSERT INTO info_personas (nombrePersonas, apellidoPersonas, numeroCedulaPersonas, edadPersonas, telefonoPersonas) values ('"
    comando += nombrePersonas+"','"+ apellidoPersonas + "'," + numeroCedulaPersonas + "," + edadPersonas + "," + telefonoPersonas + ")"
    console.log(comando)
    
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.redirect('/')
        }
    })
}

exports.consultarUno = (req, res) => {
    const id = req.params.id
    console.log(id)

    conexion.query('SELECT * FROM info_personas where id=' + id   ,(error, consulta) => {
        if(error){
            console.log("Error consultando el id en la tabla persona: " + error)
            return
        }
        //res.send(consulta)
        res.render('edit', {info_personas:consulta[0]})
    })
}

exports.actualizar = (req, res) => {
    const id = req.body.id
    const nombrePersonas = req.body.nombrePersonas
    const apellidoPersonas = req.body.apellidoPersonas
    const numeroCedulaPersonas = req.body.numeroCedulaPersonas
    const edadPersonas = req.body.edadPersonas
    const telefonoPersonas = req.body.telefonoPersonas
    //console.log(req.body, nombre, edad, genero, email)

    var comando = "UPDATE info_personas set nombrePersonas = '"+nombrePersonas+"', apellidoPersonas = '"+apellidoPersonas+"', numeroCedulaPersonas="+numeroCedulaPersonas+", edadPersonas="+edadPersonas
    comando += ",telefonoPersonas= "+telefonoPersonas
    comando += " where id ="+id
    console.log(comando)

    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.redirect('/')
        }
    })
}


exports.delete = (req, res) => {
    const id = req.params.id

    var comando = "DELETE FROM info_personas where id="+id
    console.log(comando)
    
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.redirect('/')
        }
    })
}
