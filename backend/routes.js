const { fetchLogs } = require("./controllers/LogController");

const { fetchLogsRequestValidate } = require("./validations/log.validation");

module.exports = function (app) {
  app.get("/api/healthcheck", (req, res) => {
    res.sendStatus(200);
    console.log("healthchecked");
  });

  // fetchLogs route
  app.post("/api/get-logs", fetchLogsRequestValidate, fetchLogs);
};
