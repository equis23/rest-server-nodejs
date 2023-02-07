/* eslint-disable require-jsdoc */
const path = require('path');
const express = require('express');
const cors = require('cors');
const productsRouter = require('../routes/products.route');

class Server {
  constructor() {
    this.app = express();
    this.port = 8080;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, '../public')));
  }

  routes() {
    this.app.use('/products', productsRouter);
  }

  listen() {
    this.app.listen(this.port, (err) => {
      if (err) return console.log(err);
      return console.log('server up and running at http://localhost:8080');
    });
  }
}

module.exports = Server;
