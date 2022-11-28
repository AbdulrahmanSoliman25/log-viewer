const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

/**
 * ceate the app instance with the esentials middlewares
 * @returns {InstanceType} - express js instance
 */
exports.create = () => {
  const app = express();

  app.use(express.json());
  app.use(bodyParser.json());

  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  require("../routes")(app);
  require("../utils/logger")(app);

  return app;
};
