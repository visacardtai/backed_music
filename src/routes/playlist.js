const routes = require("express").Router();
import * as controllers from "../controllers";

routes.get("/playlist", controllers.getAllPlaylist);

module.exports = routes;
