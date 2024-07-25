const { apiResponse } = require("../helpers/apiResponse");
const { db } = require("../helpers/db");

const GamesModel = {
  findAll: async () => {
    const query = "SELECT * FROM games";

    try {
      const [results, metadata] = await db.query(query);
      return apiResponse(200, "Games retrieved successfully", {
        results,
        metadata,
      });
    } catch (error) {
      return apiResponse(500, error?.message || "Failed to retrieve games");
    }
  },

  findVariants: async (id) => {
    const query = "SELECT * FROM GamesVariants WHERE GameId = :gameId";

    try {
      const [results, metadata] = await db.query(query, {
        replacements: { gameId: id },
      });

      return apiResponse(200, "Variants retrieved successfully", {
        results,
        metadata,
      });
    } catch (error) {
      return apiResponse(500, error?.message || "Failed to retrieve variants");
    }
  },
};

module.exports = {
  GamesModel,
};
