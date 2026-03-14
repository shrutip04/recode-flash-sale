const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

const { connectDB } = require("./config/db");
const { connectRedis } = require("./config/redis");

const purchaseRoutes = require("./routes/purchaseRoutes");

const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/purchase", purchaseRoutes);

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "RECODE Flash Sale Backend Running"
  });
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  console.log("Starting server without DB and Redis for now...");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();