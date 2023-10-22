const mongoose = require("mongoose");

const DiscussionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: false,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Discussion = mongoose.model("DiscussionSchema", DiscussionSchema);

module.exports = Discussion;