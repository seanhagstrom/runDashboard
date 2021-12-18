const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const Port = process.env.PORT || 8080;

app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

app.listen(Port, () => {
  console.log(`runDashboard server is running on port ${Port}!`);
});
