const dealerNameSpace = (io) => {
  const dealer = io.of("/dealer");

  dealer.on("connection", (socket) => {
    socket.on("join_table", (tableName) => {
      socket.join(tableName);
      console.log(`User ${socket.id} joined table ${tableName}`);
    });

    socket.on("notify-joinTable", ({ table, message }) => {
      dealer.in(table).emit("received-notify", message);
    });

    socket.on("increment_round", ({ table, round }) => {
      console.log(table);
      dealer.in(table).emit("updated_round", round);
    });

    socket.on("open_results", ({ table, isModalResultsOpen }) => {
      dealer.to(table).emit("received_open", isModalResultsOpen);
    });

    socket.on("send_message", ({ table, message }) => {
      dealer.to(table).emit("received_message", message);
    });

    socket.on("add_results", ({ table, result }) => {
      dealer.to(table).emit("update_results", result);
    });

    socket.on("disconnect", (socket) => {
      console.log(`User ${socket.id} is disconnected`);
    });
  });
};

module.exports = dealerNameSpace;
