// Imports
import express from 'express'
import http, { request } from 'node:http'
import path from 'node:path'
// Variables
const port = 3000
const app = express()
const Mongouri = "mongodb+srv://back_end_1:nwePqCul7PvKTyFt@bot.it8opsm.mongodb.net/?retryWrites=true&w=majority"

// Listening on port 3000

app.listen(port, () => {
    console.log(`Successfully launched application to http://localhost:${port} while using HTPP`)
})

// Using express JSON format for testing purposes
app.use(express.json());

// Connecting to mongoDB
// Connect using a MongoClient instance
const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
// Connection url
const url = 'mongodb+srv://back_end_1:nwePqCul7PvKTyFt@bot.it8opsm.mongodb.net/?retryWrites=true&w=majority';
// Database Name
const dbName = 'Blog-back-end';
// Connect using MongoClient
const mongoClient = new MongoClient(url);
mongoClient.connect(function(err, client) {
  const db = client.db(dbName);
  console.log(`Successfully connected to MongoDB: ${dbName}`);
  client.close();
})
// MAIN PAGES 

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
    console.log(`Successfully set ${req.originalUrl} as the root application`)

});
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/other-pages/about/about.html'));
});
app.get("/contact", (req, res) => { 
    res.sendFile(path.join(__dirname, '/public/other-pages/contact/contact.html'));
});



// POSTS



app.get("/post-1", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_1.html'));
});

app.get("/post-2", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_2.html'));
});

app.get("/post-3", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_3.html'));
});

app.get("/post-4", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_4.html'));
});

app.get("/post-5", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_5.html'));
});

app.get("/post-6", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_6.html'));
});

app.get("/post-7", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_7.html'));
});

app.get("/post-8", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_8.html'));
});

app.get("/post-9", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_9.html'));
});

app.get("/post-10", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_10.html'));
});


// OTHER FILES

app.get('/bg', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/other-pages/contact/bg.jpg'));
});
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/js/script.js'));
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/css/style.css'));
});

app.get('/ico', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/favicon.ico'));
})

app.get('/acss', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/other-pages/about/about.css'));
});

app.get('/ccss', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/other-pages/contact/contact.css'));
});
app.get('/pcss', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/css/posts-css/post.css'));
});



// BLOG POST IMAGES




app.get('/b1', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-1.png'));
});

app.get('/b2', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-2.png'));
});

app.get('/b3', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-3.png'));
});

app.get('/b4', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-4.png'));
});

app.get('/b5', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-5.png'));
});

app.get('/b6', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-6.png'));
});

app.get('/b7', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-7.png'));
});

app.get('/b8', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-8.png'));
});

app.get('/b9', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-9.png'));
});

app.get('/b10', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-10.png'));
});