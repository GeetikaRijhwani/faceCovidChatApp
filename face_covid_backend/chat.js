const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const verifyToken = require("./verify-token");
const userModel = require("./schemaModel").userModel;
const chatModel = require("./schemaModel").chatModel;

mongoose
	.connect("mongodb://127.0.0.1:27017/facecovid", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("connected to database");
	});


let dummyResponse = { message: "Route Test Successful" };

// to create a chat message

router.post("/create", verifyToken, (req, res) => {
	let chat = req.body;
	let chatObj = new chatModel(chat);
	chatObj.save().then(() => {
		res.send({ message: "Chat Created", code: 1 });
	});
});

// to fetch all conversations

router.get("/conversation/:user1_id/:user2_id", verifyToken, async (req, res) => {
	let user1_id = req.params.user1_id;
	let user2_id = req.params.user2_id;
	let chats = await chatModel.find({ $or: [{ sender: user1_id, receiver: user2_id }, { sender: user2_id, receiver: user1_id }] });
	// let senderData = await chatModel.find({ sender: user1_id, receiver: user2_id });
	// let receiverData = await chatModel.find({ sender: user2_id, receiver: user1_id });
	res.send(chats);
});

router.get("/conversation/:user_id", verifyToken, async (req, res) => {
	let user_id = req.params.user_id;
	let receivers = await chatModel.distinct("receiver", { sender: user_id });
	let senders = await chatModel.distinct("sender", { receiver: user_id });

	let combinedUser_ids = senders.concat(receivers);

	let user_ids = [];

	for (let i = 0; i < combinedUser_ids.length; i++) {
		let p = user_ids.find((user_id) => {
			return user_id.toString() === combinedUser_ids[i].toString();
		});

		if (p == null) {
			user_ids.push(combinedUser_ids[i]);
		}
	}

	let users = await userModel.find({ _id: user_ids });

	res.send(users);
})


module.exports = router;
