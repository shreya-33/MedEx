const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Importing the routes
const medication = require("./routes/medication");
const user = require("./routes/user");

// Utilizing the required routes
app.use("/api/v1", medication);
app.use("/api/v1", user);

module.exports = app;
