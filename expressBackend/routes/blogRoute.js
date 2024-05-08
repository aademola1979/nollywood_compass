const express = require('express')
const {
    createBlog, 
    getAllBlogs, 
    getSingleBlog, 
    updateBlog, 
    deleteBlog
} = require("../controllers/blogController.js")

const router = express.Router();

//GET all blogs
router.get('/blogs', getAllBlogs);

//POST a blog
router.post("/blog", createBlog);

//GET a single blog
router.get('/blog/:id', getSingleBlog)

//UPDATE a blog
router.patch("/blog/:id", updateBlog)


//DELETE a blog
router.delete('/blog/:id', deleteBlog)

module.exports = router;