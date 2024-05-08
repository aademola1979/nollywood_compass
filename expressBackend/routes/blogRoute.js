const express = require('express')
const {createBlog, getAllBlogs, getSingleBlog} = require("../controllers/blogController.js")

const router = express.Router();
router.post("/createBlog", createBlog);
router.get('/getBlogs', getAllBlogs);
router.get('/singleBlog/:id', getSingleBlog)

module.exports = router;