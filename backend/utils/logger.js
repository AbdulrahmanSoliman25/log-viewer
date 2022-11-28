const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

/**
 * wrapping the app instance with the logger middleware
 * @param {InstanceType} app - express js instance
 * @returns {InstanceType} - express js instance
 */
module.exports = function (app) {
  app.use(
    morgan("combined", {
      stream: fs.createWriteStream(
        path.join(__dirname, "../logs", "log-sample.log"),
        { flags: "a" }
      ),
    })
  );
  return app;
};
