// 1. Obtener paquete para servicios Web.
const express = require('express');

// 2. Crear instancia de servidor Web.
const app = express();

// 2.1. COnfigurar Acceso CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// 3. Obtener paquete para facilitar lectura de variables.
const bodyParser = require('body-parser');

// 4. Obtener variables de configuración.
const environment = require('./configuration/constants');

// 5. Obtener paquete para gestión de Mongo
const mongoose = require('mongoose');

// 6. Obtener Rutas de los servicios
const booksRouter = require('./routes/books');

// 7. Configurar Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 8. Agregar Rutas
app.use('/api', booksRouter);

// 9. Inicializar Servidor Express.
app.listen(environment.port, () => {
    try {
        console.log('El servidor Api Node se ha iniciado por el puerto: ' + environment.port);
        mongoose.connect(environment.mongo_url, { useNewUrlParser: true },
            (errorMongo) => {
                if (errorMongo) {
                    return console.log(`Error de Conexión Mongo: ${errorMongo}`);
                }
                return console.log(`Conexión Correcta Mongo`);
            }
        );
    } catch (errorApi) {
        console.log(`El servidor Api Node se ha iniciado por el puerto: ${errorApi}`);
    }
});