require("dotenv").config();
const express = require("express");
const sequelize = require("./utils/db");
const app = express();
const helmet = require("helmet");
const apiRoutes = require("./routes/api");

process.on("uncaughtException", (err) => {
  console.log("Error uncaught exception", err);
});

// Static
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet({ contentSecurityPolicy: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow_headers", "Content-Type, Authorization");
  next();
});

app.use("/api", apiRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const msg = error.message || "Unknown Error Occurred!";
  const data = error.data;

  res.status(status).json({
    msg: msg,
    data: data,
  });
});
sequelize.sync();
app.listen(process.env.PORT || 4000);
