const express = require("express");
const router = express.Router();
const discussionController = require("../controllers/discussion");

router.post("/createDiscussion/:id", discussionController.createQuestion);

module.exports = router;