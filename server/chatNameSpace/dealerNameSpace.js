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
      console.log(round);
      dealer.in(table).emit("updated_round", round);
    });

    socket.on("send_message", ({ table, message }) => {
      dealer.to(table).emit("received_message", message);
    });

    socket.on("open_results", ({ table, isModalResultsOpen }) => {
      dealer.to(table).emit("received_open", isModalResultsOpen);
    });

    socket.on("close_results", ({ table, isModalResultsOpen }) => {
      dealer.to(table).emit("received_close", isModalResultsOpen);
    });

    socket.on("add_results", ({ table, result }) => {
      dealer.to(table).emit("update_results", result);
    });

    socket.on("new_results", ({ table, results }) => {
      dealer.to(table).emit("update_newResults", results);
    });

    socket.on("reset_results", ({ table, resetResults }) => {
      dealer.to(table).emit("update_resetResults", resetResults);
    });

    socket.on("disconnect", (socket) => {
      console.log(`User ${socket.id} is disconnected`);
    });
  });
};

module.exports = dealerNameSpace;
