// ******************** Autor ********************
// Autor: Diego Alonso Trujillo
// Webside: https://diego-trujillo-portafolio.herokuapp.com/

// ******************** FIN CODIGO ********************

const express = require("express");
const cors = require("cors");
const dbConnection = require("../database/config");


class Server {
    constructor () {
            this.PORT = process.env.PORT;
            this.app = express(); // create an instance of express
            // Conectar con la base de datos
            this.conectarDB();
            // API routes
            this.usuarioPath = "/api/usuarios";

            //Middlewares
            this.middlewares();

            // Rutas de mi aplicacion
            this.routes();
    }

  async conectarDB() {
    // Conectar con la base de datos
           await dbConnection();
  }

  middlewares() {
            //CORS
            this.app.use(cors());
            //Lectura y parseo del body
            this.app.use(express.json());  

            // Directorio publico
            this.app.use(express.static("public"));
  }

  routes() {
            this.app.use(this.usuarioPath, require("../routes/user.routes"));
  }

  listen() {
      this.app.listen(this.PORT, () => {
          console.log(
              `=>> Conexion establecida en el servidor :=> http://localhost:${this.PORT}`
                .italic.bgBrightRed //.bgGreen.black
          );
      });
  }
}

module.exports = Server;
