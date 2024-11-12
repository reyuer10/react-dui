const express = require("express");
const router = express.Router();
const dealerController = require("../controller/dealerController");

router.post("/cg/dealer/get/results", dealerController.getResults);
router.post("/cg/dealer/post/results", dealerController.postResults);
// router.post();
// router.delete();
// router.put();

module.exports = router;
