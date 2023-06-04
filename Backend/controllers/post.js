const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const User = require("../models/User");
const Discussion = require("../models/Discussion");

module.exports = {
  getDiscussion: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const user = await User.findById(req.user);
      const discussion = await Discussion.find({ post: req.params.id })
        .sort({ createdAt: "asc" })
        .lean();
      res.render("post.ejs", {
        post: post,
        user: user,
        disucssion: discussion,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getCreatePost: (req, res) => {
    res.render("createPost.ejs");
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      let result;
      if (req.file) {
        result = await cloudinary.uploader.upload(req.file.path);
      }
      if (!result) {
        await Post.create({
          post: req.body.post,
          answer: req.body.answer,
          discussion: req.body.discussion,
          createdAt: req.body.createdAt,
          user: req.user,
        });
      } else {
        await Post.create({
          post: req.body.post,
          image: result.secure_url,
          cloudinaryId: result.public_id,
          answer: req.body.answer,
          discussion: req.body.discussion,
          createdAt: req.body.createdAt,
          user: req.user,
        });
      }
      console.log("Post has been created!");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  getPostList: async (req, res) => {
    try {
      const postList = await Post.find({})
      .sort({ createdAt: "desc"})
      .lean();
      res.render("post.ejs", {
        postList: postList,
      });
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      //Find post by id and find associated discussion
      const post = await Post.findById({ _id: req.params.id });

      // Delete image from cloudinary
      if (listing.cloudinaryId) {
        await cloudinary.uploader.destroy(listing.cloudinaryId);
      }

      //Delete post from database
      await Post.remove({ _id: req.params.id });
      await Discussion.remove({ post: req.params.id });
      console.log("Deleted post and associated discussion.");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};