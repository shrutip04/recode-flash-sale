const express = require("express");
const router = express.Router();

const { purchaseProduct } = require("../controllers/purchaseController");

router.post("/", purchaseProduct);

module.exports = router;