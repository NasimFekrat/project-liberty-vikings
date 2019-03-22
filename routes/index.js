const path = require("path");
const router = require("express").Router();
const authRoutes = require("./api/authAPI");
const postRoutes = require("./api/postAPI");
const commentRoutes = require("./api/commentsAPI");


// API Routes

router.use("/api/posts", postRoutes);
router.use("/api/comments", commentRoutes);
router.use("/auth", authRoutes);

module.exports = router;
