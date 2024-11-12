const express = require("express");
const { createServer } = require("http");
// const { Server } = require("socket.io");
const cors = require("cors");

const dealerRoutes = require("./routes/dealerRoutes");
const colorGameRoutes = require("./routes/colorGameRoutes");
const tableRoutes = require("./routes/tableRoutes");

const WebSocket = require("ws");
// const uuid = require("uuid");

const os = require("os");
// const dealerNameSpace = require("./chatNameSpace/dealerNameSpace");
console.log("Computer Name:", os.hostname());

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api", dealerRoutes);
app.use("/api", colorGameRoutes);
app.use("/api", tableRoutes);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

const wss = new WebSocket.Server({ server });

wss.setMaxListeners(100);

let rooms = {};
let clients = new Set();

// send room except the sender.
const sendRoom = (roomName, message, ws) => {
  if (rooms[roomName]) {
    rooms[roomName].forEach((senderWs) => {
      if (senderWs !== ws) {
        ws.send(JSON.stringify(message));
      }
    });
  }
};

const sendToAllRoom = (roomName, message) => {
  if (rooms[roomName]) {
    rooms[roomName].forEach((client) => {
      client.send(JSON.stringify({ message }));
    });
  }
};

wss.on("connection", (ws) => {
  const joinedRoom = (roomName) => {
    if (!rooms[roomName]) {
      rooms[roomName] = new Set();
    }

    rooms[roomName].add(ws);
    return console.log(`A client joined room ${roomName}`);
  };

  ws.on("message", (data) => {
    const parseData = JSON.parse(data);
    clients.add(ws);

    // console.log(parseData);

    if (parseData.type === "join-table") {
      joinedRoom(parseData.room);
      ws.send(JSON.stringify(parseData));
    }

    if (parseData.type === "send-to-room" && parseData.isModalOpen === true) {
      sendToAllRoom(parseData.room, parseData);
    }

    if (parseData.type === "increment_round") {
      sendToAllRoom(parseData.room, parseData);
    }

    if (parseData.type === "update_results") {
      sendToAllRoom(parseData.room, parseData);
    }

    if (parseData.type === "new_results") {
      sendToAllRoom(parseData.room, parseData);
    }

    if (parseData.type === "increment-prizes") {
      clients.forEach((client) => {
        client.send(JSON.stringify(parseData));
      });
    }

    ws.on("close", () => {
      for (let roomName in rooms) {
        rooms[roomName].delete(ws);
        if (rooms[roomName].size === 0) {
          delete rooms[roomName];
        }
      }
      console.log("A client disconnected");
    });
  });
});
