const routes = require("express").Router();
import * as controllers from "../controllers";

routes.get("/register", controllers.register);

module.exports = routes;
