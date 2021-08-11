const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const verifyToken = require("./verify-token");

const userModel = require("./schemaModel").userModel;



let dummyRes = { message: "Test Successful!" };

//Salt for Password Encryption
let salt = "Secret-Key";
let tokenKey = "Token-Key";

mongoose.connect("mongodb://127.0.0.1:27017/facecovid", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => {
		console.log("connected to database");
	});

router.post("/register", (req, res) => {
	let user = req.body;
	user.password = crypto
		.pbkdf2Sync(user.password, salt, 1000, 64, "sha512")
		.toString("hex");

	let userObj = new userModel(user);
	userObj.save().then(() => {
		res.send({ message: "User Registered" });
	});
});

router.post("/login", async (req, res) => {
	let userCredentials = req.body;
	userCredentials.password = crypto
		.pbkdf2Sync(userCredentials.password, salt, 1000, 64, "sha512")
		.toString("hex");
	let userCount = await userModel.find(userCredentials).countDocuments();
	if (userCount == 1) {
		let userinfo = await userModel.findOne(userCredentials);
		jwt.sign(userCredentials, tokenKey, (err, token) => {
			if (err !== null) {
				res.send({ message: "Some Problem! Try after some time", code: 0 });
			} else {
				res.send({ token: token, user: userinfo, code: 1 });
			}
		});
	} else {
		res.send({ message: "Wrong Username or Password", code: 0 });
	}

	// console.log(userCount);
	// res.send(userCredentials);
});

router.get("/counsellors", verifyToken, async (req, res) => {
	let me = await userModel.find({ role: "counsellor" });

	res.send(me);
})

router.get("/users/:id", verifyToken, async (req, res) => {
	let id = req.params.id;
	let me = await userModel.find({ _id: id });

	res.send(me);
})

module.exports = router;
