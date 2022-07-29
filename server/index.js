const express = require('express')
const app = express()
const path = require('node:path')
app.listen(3000)
// send the file in ../public/index.html
// setting it to the root app.post('/products', (req,res) => {
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
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


app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/js/script.js'));
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/css/style.css'));
});

app.get('/ico', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/favicon.ico'));
})







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
app.get('/pcss', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/post.css'));
});