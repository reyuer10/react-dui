const express = require("express");
const router = express.Router();
const tableController = require("../controller/tableController");

router.post("/cg/table/info", tableController.getTableInfo);

module.exports = router;
