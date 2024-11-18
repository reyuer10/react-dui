const express = require("express");
const router = express.Router();
const tableController = require("../controller/tableController");

router.post("/cg/table/info", tableController.getTableInfo);
router.put("/cg/table/update/info", tableController.updateTableInfo);
router.post("/cg/create/table", tableController.newTableInfo);

module.exports = router;
