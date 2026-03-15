const express = require("express");
const router = express.Router();

const { simulateTraffic } = require("../controllers/simulatorController");

router.post("/traffic", simulateTraffic);

module.exports = router;