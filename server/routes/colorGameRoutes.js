const express = require("express");

const router = express.Router();

const colorGameController = require("../controller/colorGameController");

router.get(
  "/color-game/get/table-info",
  colorGameController.getColorGameTaleData
);


module.exports = router
