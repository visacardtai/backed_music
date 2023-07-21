const routes = require("express").Router();
import * as controllers from "../controllers";

routes.get("/song", controllers.getAllSong);

module.exports = routes;
