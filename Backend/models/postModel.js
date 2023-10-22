const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: false,
  },
  discussion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Discussion",
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

const Post = mongoose.model("PostSchema", PostSchema);

module.exports = Post;