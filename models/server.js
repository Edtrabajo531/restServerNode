const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 
}

class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(express.json()); // conversion body a json
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use('/api/usuarios',require("../routes/usuarios.route"));

  }

  listen() {
    this.app.listen(port, () => console.log("Ejecutando en puerto " + port));
  }
}

module.exports = Server;
