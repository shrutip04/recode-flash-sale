let io = null;

function initSocket(server) {

  const { Server } = require("socket.io");

  io = new Server(server, {
    cors: {
      origin: "*"
    }
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

}

function broadcastStockUpdate(productId, stock) {

  if (!io) return;

  io.emit("stockUpdate", {
    productId,
    stock
  });

}

module.exports = {
  initSocket,
  broadcastStockUpdate
};