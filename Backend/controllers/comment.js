const Comment = require("../models/Comment");
const Post = require("../models/Post");
const User = require("../models/User");

module.exports = {
  createComment: async (req, res) => {
    try {
      await Comment.create({
        username: req.body.username,
        comment: req.body.comment,
        post: req.params.id,
        user: req.user,
      });
      console.log("Comment has been posted!");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  getComments: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const user = await User.findById(req.user);
      const comment = await Comment.find({})
        .sort({ createdAt: "desc" })
        .lean();
      res.render("post.ejs", {
        post: post,
        user: user,
        comment: comment,
      });
    } catch (err) {
      console.log(err);
    }
  },
};