//Including Predefined Modules
const express = require("express");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
// require('dotenv').config();

const userRouter = require("./user");
const chatRouter = require("./chat");

const app = express();

const server = http.createServer(app);

const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3000",
	},
});

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/chat", chatRouter);


const chatModel = require("./schemaModel").chatModel;

//socket channel work
io.on("connection", (socket) => {
	const id = socket.handshake.query.id;

	socket.join(id);
	socket.on('send-message', (chat) => {
		let chatObj = new chatModel(chat);
		chatObj.save().then(() => { });

		socket.broadcast.to(chat.receiver).emit('receive-message', chat)
	})
})

// Start the server
// before socket 
// app.listen(8000);
// after socket
server.listen(8000);
