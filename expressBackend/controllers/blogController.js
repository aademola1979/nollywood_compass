const Blog = require('../models/blogSchema')
const {ObjectId} = require('mongodb')
 

const createBlog = async(req, res)=>{
    const {title, description, authorId, tags, body} = await req.body;
    console.log(req.body)

    let emptyFields = [];
    if (!title){
        emptyFields.push('title')
    }

    if(!description){
        emptyFields.push('description')
    }

    if(!tags){
        emptyFields.push('tags')
    }

    if(!body){
        emptyFields.push('body')
    }

    if(!authorId){
        emptyFields.push('authorId')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({error:"All field must filleds.", emptyFields})
    }

    try {
        const blog = await Blog.create({title, description, body, tags, authorId

        })
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

const getAllBlogs = async (req, res)=> {
    try {
        const blogs = await Blog.find({})
        res.status(200).json(blogs) 
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}


const getSingleBlog = async(req, res)=>{
    const id = req.params.id
    try {
        const blog = await Blog.findOne({_id:id})
        return res.status(200).json(blog)
    } catch (error) {
        return res.status(400).json({error:error.message})
        
    }

}

const upDateBlog = async(req, res)=>{
    const {title, description, authorId, tags, body} = await req.body;
    console.log(req.body)

    let emptyFields = [];
    if (!title){
        emptyFields.push('title')
    }

    if(!description){
        emptyFields.push('description')
    }

    if(!tags){
        emptyFields.push('tags')
    }

    if(!body){
        emptyFields.push('body')
    }

    if(!authorId){
        emptyFields.push('authorId')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({error:"All field must filleds.", emptyFields})
    }

    try {
        const blog = await Blog.create({title, description, body, tags, authorId

        })
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }



}

module.exports = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    upDateBlog
} 