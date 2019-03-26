const express = require('express');

const server = express();

const postsRouter = require('./posts/posts-router');

server.use(express.json());

server.get('/', (req, res)=>{
    res.send(`
        <div style="background-image: url('https://i.redd.it/lwwt86ci5anz.jpg'); background-size: cover; height: 700px; ">
            <h2 style="color:white;"> Post Portal </h2>
        </div>
    `);
})

server.use('/api/posts', postsRouter);

module.exports = server; 