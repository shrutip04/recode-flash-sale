import { io } from "socket.io-client";

const socket = io("https://recode-flash-sale.onrender.com", {
  transports: ["websocket"],
  reconnection: true
});

socket.on("connect", () => {
  console.log("Socket connected:", socket.id);
});

export default socket;