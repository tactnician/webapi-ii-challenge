const express = require('express');

const Posts = require('../data/db');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find(req.query);
        res.status(200).json({posts});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error retrieving posts"
        })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        console.log(post);
        if(post[0]){
            res.status(200).json(post);
        } else {
            res.status(404).json({message: "Post not found"});
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: `Error getting post ${post}`
        })
    }
});

router.post('/', async (req, res) => {
    try {
        const post = await Posts.insert(req.body);
        console.log(post);
        if(post){
            res.status(201).json(post);
        } else {
            res
                .status(404)
                .json({errorMessage: "Please provide title and contents for the post." })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: `Error creating post ${error}`
        })
    }
});

router.put('/:id', async (req, res) => {

});

router.delete('/:id', async (req, res) => {
    try{
        const count = await Posts.remove(req.params.id);
        console.log(' delete obj ', post)
        if(count > 0){
            res.status(200).json({message: "the post has been removed"})
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }
    } catch (error) {
        res.status(500).json({error: "The post could not be removed" });
    }
});


module.exports = router; 