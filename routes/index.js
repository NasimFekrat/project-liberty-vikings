const path = require("path");
const router = require("express").Router();
const authRoutes = require("./api/authAPI");
const meetingRoutes = require("./api/meetingAPI");
const commentRoutes = require("./api/commentsAPI");


// API Routes

router.use("/api/meetings", meetingRoutes);
router.use("/api/comments", commentRoutes);
router.use("/auth", authRoutes);

// If no API routes are hit, send the React app
// Serve the UI over express server
router.get("*", function (req, res) {
  if (process.env.NODE_ENV === "production") {
      res.sendFile(path.join(__dirname, "./client/build/index.html"));
  } else {
      res.sendFile(path.join(__dirname, './client/public/'));
  }
});

module.exports = router;
