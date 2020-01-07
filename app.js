const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const db = mongoose.connection;
const config = require("./config/config");
const bodyParser = require("body-parser");
const routesPages = require("./routes/routes-pages");
const routesAPI = require("./routes/routes-api");

mongoose.connect(config.db.connectionString);

db.on("error", () => {
  console.log("Error connecting to the database");
});
db.once("open", () => {
  console.log("Database connection successful");
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routesPages);
app.use("/api", routesAPI);

app.use(function(req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.listen(config.app.port, () =>
  console.log(`Server started on port ${config.app.port}`)
);
