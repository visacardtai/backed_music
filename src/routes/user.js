const routes = require("express").Router();
import * as controllers from "../controllers";

routes.get("/user", controllers.getAllUser);

module.exports = routes;
