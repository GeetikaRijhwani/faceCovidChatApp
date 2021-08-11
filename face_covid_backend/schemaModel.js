const mongoose = require("mongoose");

//Schema for Users
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
  password: String,
    role: String
  });
  
  //model for Users
  const userModel = new mongoose.model("users", userSchema);

  const chatSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    message: String,
    timestamp: { type: Date, default: Date.now },
  });
  
  let dummyResponse = { message: "Route Test Successful" };
  
  const chatModel = new mongoose.model("chats", chatSchema);
  
module.exports = { userModel: userModel, chatModel: chatModel };