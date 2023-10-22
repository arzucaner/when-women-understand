const Discussion = require("../models/Discussion");

module.exports = {
  createDiscussion: async (req, res) => {
    try {
      await Discussion.create({
        username: req.body.username,
        discussion: req.body.discussion,
        post: req.params.id,
        user: req.user,
      });
      console.log("Discussion has been posted!");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
};