// Getting the express router
const { Router } = require("express");

// Importing the standard api response
const { GamesController } = require("../../controllers/gamesController");

const gamesRouter = Router();

gamesRouter.get("/", GamesController.findAll);

gamesRouter.get("/:id/variants", GamesController.findVariants);

module.exports = {
  gamesRouter,
};
