const express = require("express");
const router = express.Router();
const { listEvents, addPost,deletEvent, updateEvent} = require("../controllers/users");
router.get("/list-events", listEvents);
//router.get("/all-products", listPosts);
router.post("/add-post", addPost);
router.post("/delete-event",deletEvent)
router.post("/update-event", updateEvent)
module.exports = router;