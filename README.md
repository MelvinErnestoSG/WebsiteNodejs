# Configuracion del Proyecto.
Crear una carpeta WebsiteNodejs.
Abrir una terminal con el comando (npm init -y) para crear package.json. 

# Instalar dependencias.
Express se utiliza para crear el servidor y servir paginas al frontend hacia el navegador.
Morgan se utiliza para poder ver por consola las peticiones que van llegando.
Ejs se utiliza para extender al HTML con logica de programación sin tener que llamar etiquetas.
Con el comando npm i express morgan ejs

# Instalar modulos de desarrollo devDepencies.
npm i nodenom -D

# Para reiniciar el codigo sin tener que ejecutar con cada cambio.
npx nodemon src/index.js

# Para crear el scripts en el package.json.
"dev":src/index.js

# Para ejecutar el scripts por consola que esta modificado en package.json.
npm run dev
