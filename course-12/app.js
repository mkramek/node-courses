require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

const http = require("http").createServer(app);
const io = require("socket.io")(http);

let users = {};

io.on("connection", (socket) => {
  socket.emit("message", { name: "_admin", message: "User connected!" });

  const broadcast = (event, data) => {
    socket.emit(event, data);
    socket.broadcast.emit(event, data);
  };

  broadcast("user", users);

  socket.on("message", (message) => {
    if (users[socket.id] !== message.name) {
      users[socket.id] = message.name;
      broadcast("user", users);
    }
    broadcast("message", message);
  });

  socket.on("disconnect", () => {
    delete users[socket.id];
    socket.broadcast.emit("user", users);
  });
});

http.listen(process.env.PORT, () => {
  console.log(`listening on *:${process.env.PORT}`);
});
