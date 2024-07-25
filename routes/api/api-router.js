// Getting the express router
const { Router } = require("express");

// Importing the standard api response
const { apiResponse } = require("../../helpers/apiResponse");

// Importing the games router
const { gamesRouter } = require("./games-router");

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  return res.json(apiResponse(200, "Welcome to the API"));
});

apiRouter.get("/echo", (req, res) => {
  return res.json(apiResponse(200, "API is working fine"));
});

apiRouter.use("/games", gamesRouter);

module.exports = {
  apiRouter,
};
