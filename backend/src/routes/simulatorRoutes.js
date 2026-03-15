const express = require("express");
const router = express.Router();

const { simulateTraffic } = require("../controllers/simulatorController");

router.post("/", simulateTraffic);

module.exports = router;