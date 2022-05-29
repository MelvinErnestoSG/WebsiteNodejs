const express = require('express')
const multer  = require('multer')
const sharp = require('sharp')
const fs = require('fs')

/*cambiando la dirección donde se descargan la imagenes*/
const storageStrategy = multer.memoryStorage()
const upload = multer({ storage: storageStrategy})

const App = express()

/*Haciendo el parseo para mostrar la información undefined.*/
App.use(express.json())

/*Haciendo una petición a nuestro servidor nodejs.*/
App.get('/', (req, res) => {
    res.send('Hello World from heroku')
})

/*Recibir imágenes en una ruta de nuestro servidor nodejs y multer.*/
/*instalado dependencias multer para recibir imagenes*/
/*instalando nodemon como dependencia de desarrollo y script.*/
/*instalando sharp como dependencia para detectar las archivos de imagenes.*/
/*Utilizando (async) para decir que es un codigo asincrono y el (await) para esperar el resultado de la promesa.*/
/*Para obtener (resizedImageBuffer) la imagen de datos rescalada.*/
App.post('/imagen', upload.single('imagen') , async (req, res)=>{
    /*Enviando información desde postman*/
    const body = req.body
    const imagen = req.file
    const processedImage = sharp(imagen.buffer)
    const resizedImage = processedImage.resize(800, 200,{
        fit: "contain",
        background: "#FFF"
    })
    const resizedImageBuffer = await resizedImage.toBuffer()
    fs.writeFileSync('nuevaruta/prueba.png', resizedImageBuffer)
    console.log(resizedImageBuffer)
    res.send({resizedImage: resizedImageBuffer})
})

/*Para detectar el puerto aleatorio a heroku */
const Port = process.env.Port || 4000

App.listen(Port, function(){
    console.log('Servido Esta escuchando en el puerto', Port)
})