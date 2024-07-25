// Getting the express router
const { Router } = require("express");

// Importing the standard api response
const { apiResponse } = require("../../helpers/apiResponse");

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  return res.json(apiResponse(200, "Welcome to the API"));
});

apiRouter.get("/echo", (req, res) => {
  return res.json(apiResponse(200, "API is working fine"));
});

module.exports = {
  apiRouter,
};
