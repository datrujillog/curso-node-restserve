
const mongooose = require('mongoose');
require('dotenv').config();

let path =  process.env.MONGODB_URL ||  process.env.MONSGODB_CNN 


const dbConnection = async () => {
    try {

        await mongooose.connect(path, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // // useCreateIndex: true,
            // useFindAndModify: false
        }).then(() => {
            console.log('=>> Conexion establecida a la base de datos'.bgGreen.black);
        })


    } catch (error) {
        console.log(error);
        throw new Error('ERROR!!!: No se pudo conectar a la base de datos');


    }

}


module.exports = dbConnection;