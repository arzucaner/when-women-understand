const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postController = require("../controllers/post");

router.get("/:id", postController.getPost);
router.post(
  "/createPost",
  upload.single("file"),
  postController.createPost
);
router.delete("/deletePost/:id", postController.deletePost);

module.exports = router;