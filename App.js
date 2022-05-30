/*Instalar Express como dependencia de el proyecto.*/
const express = require('express')
const app = express()
/*Escribiendo la función para controlar las peticiones a la ruta principal de nuestra aplicación.*/
app.get('/', function (req, res) {
    res.send('Hello World')
})
/*Poner nuestra aplicación a escuchar en un puerto.*/
app.listen(3000)
