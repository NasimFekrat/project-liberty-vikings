const router = require("express").Router();
const commentsController = require("../../controllers/commentsController")

// Matches with "/api/posts" (check server.js line 19)
router.route("/")
  .get(commentsController.findAll) // get all posts
  .post(commentsController.create) // create a post

router.route("/:id")
  .get(commentsController.findById) // get a post by id
  .put(commentsController.update) // update a post by id
  .delete(commentsController.delete) // delete a post by id

module.exports = router;