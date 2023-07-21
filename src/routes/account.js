const routes = require("express").Router();
import * as controllers from "../controllers";

routes.get("/account", controllers.getAllAccount);

module.exports = routes;
