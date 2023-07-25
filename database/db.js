//Conexión a la base de datos MYSQL

const mysql = require('mysql') // Trae el paquete de mysql

const conexion = mysql.createConnection({ //Objeto de conexión
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'backend_db'
})

conexion.connect((error) => {
    if(error){
        console.log("Error de conexión" + error)
        return
    } 
    console.log("Conexión a Mysql exitosa")
})

module.exports = conexion
