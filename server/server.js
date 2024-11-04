const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const dealerRoutes = require("./routes/dealerRoutes");
const colorGameRoutes = require("./routes/colorGameRoutes");

const os = require("os")
console.log("Computer Name:", os.hostname());

// const db = require("./db/db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    method: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("User is connected: ", socket.id);

  socket.on("sendMessage", (data) => {
    console.log("Message received: ", data);

    io.emit("sendMessage", data);
  });
});

app.use("/api", dealerRoutes);

app.use("/api", colorGameRoutes);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
