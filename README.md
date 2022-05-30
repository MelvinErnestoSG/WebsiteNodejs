# Creando Servidor de Node con un hola mundo
Primero Crear un archivo de tipo js

# Iniciar el proyecto de Node JS con npm init
luego responder las preguntas para crear esto
{
  "name": "nodejs_server",
  "version": "1.0.0",
  "description": "Este es un servidor de Nodejs",
  "main": "App.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Melvin Ernesto",
  "license": "ISC",
}

# Instalar Express como dependencia en el proyecto con npm install express
Usar este comando en la console se instalan las librerias de node_modules
y las dependencias en package.json
"dependencies": {
  "express": "^4.18.1"
}
un package-lock.json para determinar la versión de la 
librería express.

# Escribiendo la función para controlar las peticiones a la ruta principal de nuestra aplicación
const express = require('express')
const app = express() 
/*Estructura de funciones en NodeJs/Javascript*/
app.get('/', (req, res) => {
  res.send('Hello World')
})
/*Poner nuestra aplicación a escuchar en un puerto.*/
app.listen(3000) 

# Para enviar la respuesta al navegador
ejecutar en la terminal el comando 
node NombreAchivo.js luego enter para levantar el servidor
Abri el navegador escribir http://localhost:3000/

