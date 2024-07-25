const { apiResponse } = require("../helpers/apiResponse");
const { GamesModel } = require("../models/gamesModel");

const GamesController = {
  findAll: async (req, res) => {
    const response = await GamesModel.findAll();
    return res.status(response.status).json(response);
  },

  findVariants: async (req, res) => {
    const id = req.params?.id;

    if (!id) {
      return res.status(400).json(apiResponse(400, "Game ID is required"));
    }

    const response = await GamesModel.findVariants(id);
    return res.status(response.status).json(response);
  },
};

module.exports = {
  GamesController,
};
