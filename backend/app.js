const config = require("./config/default.json");
const server = require("./utils/server");

const env = process.env.NODE_ENV || "development";
var port = config[env].port || "80";

// create express app 
const app = server.create();

// listen on the enviroment port 
app.listen(port, async () => {
  console.log(`listen to http://localhost:${port}`);
});
