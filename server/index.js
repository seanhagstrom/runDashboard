const express = require("express");
const app = express();
const Port = process.env.PORT || 8080;

app.listen(Port, () => {
  console.log(`runDashboard server is running on port ${Port}!`);
});
