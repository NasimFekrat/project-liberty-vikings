const router = require("express").Router();
const postsController = require("../../controllers/postsController")

// Matches with "/api/posts" (check server.js line 19)
router.route("/")
  .get(postsController.findAll) // get all posts
  .post(postsController.create) // create a post

router.route("/:id")
  .get(postsController.findById) // get a post by id
  .put(postsController.update) // update a post by id
  .delete(postsController.delete) // delete a post by id

module.exports = router;