// Imports
const express = require("express");
const cors = require("cors");

// ENV variables
require("dotenv").config();

// Routers
const { apiRouter } = require("./routes/api/api-router");

// Helpers
const { apiResponse } = require("./helpers/apiResponse");
const { db } = require("./helpers/db");

// Accessing envs
require("dotenv").config();

// Generating an express app
const app = express();

// Setting up the cors
app.use(
  cors({
    origin: process.env?.APP_URL || "http://localhost:3000",
  })
);

// Setting up the port
const PORT = process.env?.PORT || 8080;

// Setting up the routes
app.get("/", (req, res) => {
  return res.json(apiResponse(200, "Welcome to the API"));
});

app.use("/api", apiRouter);

app.use((req, res) => {
  return res.json(apiResponse(404, "Route not found"));
});

async function startApp() {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
    // Starting the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

startApp();
