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
})

module.exports = router; 