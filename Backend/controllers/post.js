const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

module.exports = {
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
          comment: req.body.comment,
          createdAt: req.body.createdAt,
          user: req.user,
        });
      } else {
        await Post.create({
          post: req.body.post,
          image: result.secure_url,
          cloudinaryId: result.public_id,
          answer: req.body.answer,
          comment: req.body.comment,
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
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const user = await User.findById(req.user);
      res.render("listing.ejs", {
        post: post,
        user: user,
      });
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
      await Comment.remove({ post: req.params.id });
      console.log("Deleted post and associated comments.");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};