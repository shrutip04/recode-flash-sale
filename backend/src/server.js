const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

const { connectDB } = require("./config/db");
const { connectRedis } = require("./config/redis");

const purchaseRoutes = require("./routes/purchaseRoutes");

const productRoutes = require("./routes/productRoutes");

const orderRoutes = require("./routes/orderRoutes");

const dashboardRoutes = require("./routes/dashboardRoutes");

const { initSocket } = require("./sockets/socketServer");

const simulatorRoutes = require("./routes/simulatorRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/purchase", purchaseRoutes);

app.use("/api/products", productRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/simulate", simulatorRoutes);


app.get("/", (req, res) => {
  res.json({
    message: "RECODE Flash Sale Backend Running"
  });
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  console.log("Starting server without DB and Redis for now...");

  const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

initSocket(server);
}

startServer();