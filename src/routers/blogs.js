const blogsRouter = require('express').Router()
const Blog = require('../models/blog');

//routes
//fetch all blogs
blogsRouter.get('/',(req, res) => {
    Blog.fetch().then((data)=> {
        if(data) {
            res.send(data);
        } else {
            res.status(500).end();
        }
    })
});
//add blog
blogsRouter.post('/',(req, res) => {
    const blog = req.body;
    Blog.fetch().then((data)=> {
        if(data) {
            Blog.update(data.concat(blog)).then((data) => {
                res.send(blog);
            })
        } else {
            res.status(500).end();
        }
    })
});
//remove blog
blogsRouter.delete('/:id',(req, res) => {
    const id = req.params.id;
    Blog.fetch().then((data)=> {
        if(data) {
            Blog.update(data.filter(blog => blog.id !== id)).then((data) => {
                res.send(data);
            })
        } else {
            res.status(500).end();
        }
    })
});
  
module.exports = {
    blogsRouter
}