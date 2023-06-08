const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true,
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
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

module.exports = mongoose.model("Post", PostSchema);