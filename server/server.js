const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const dealerRoutes = require("./routes/dealerRoutes");
const colorGameRoutes = require("./routes/colorGameRoutes");

const os = require("os");
const dealerNameSpace = require("./chatNameSpace/dealerNameSpace");
console.log("Computer Name:", os.hostname());

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

// io.on("connection", (socket) => {
// });

dealerNameSpace(io);

app.use("/api", dealerRoutes);
app.use("/api", colorGameRoutes);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
