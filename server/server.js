const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const dealerRoutes = require("./routes/dealerRoutes");
const db = require("./db/db");

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
});

app.use("/api", dealerRoutes);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
