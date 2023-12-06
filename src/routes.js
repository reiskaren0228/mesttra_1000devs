const express = require("express");
const routes = express.Router();
const { calcularIdade } = require("./controller/user_controller.js");

routes.get(`/user`, calcularIdade);

module.exports = routes;
