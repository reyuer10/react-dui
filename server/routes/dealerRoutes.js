const express = require("express");
const router = express.Router();
const dealerController = require("../controller/dealerController");

router.post("/cg/dealer/get/results", dealerController.getResults);
router.post("/cg/dealer/post/results", dealerController.postResults);
router.put("/cg/dealer/update/results", dealerController.updateResults);
router.put("/cg/dealer/new-game/table", dealerController.newTableGame);

module.exports = router;
