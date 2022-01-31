// ******************** Autor ********************
// Autor: Diego Alonso Trujillo
// Webside: https://diego-trujillo-portafolio.herokuapp.com/

// ******************** FIN CODIGO ********************



const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.PORT = process.env.PORT;
    this.app = express(); // create an instance of express

    // API routes
    this.usuarioPath = "/api/usuarios";

    //Middlewares
    this.middlewares();

    // Rutas de mi aplicacion
    this.routes();
  }
  middlewares() {
    //CORS
    this.app.use(cors());
    //Lectura y parseo del body
    this.app.use(express.json());
    // next();

    // Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuarioPath, require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(
        `Conexion establecida en el servidor :=> http://localhost:${this.PORT}`
          .italic.bgBrightRed
      );
    });
  }
}

module.exports = Server;
