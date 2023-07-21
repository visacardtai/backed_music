const user = require("./user");
const auth = require("./auth");
const playlist = require("./playlist");
const account = require("./account");
const song = require("./song");

const initRoutes = (app) => {
  app.use("/api/v1/users", user);
  app.use("/api/v1/auths", auth);
  app.use("/api/v1/playlists", playlist);
  app.use("/api/v1/accounts", account);
  app.use("/api/v1/songs", song);

  return app.use("/", (req, res) => {
    return res.send("SERVER ON");
  });
};

module.exports = initRoutes;
