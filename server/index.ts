import express from 'express'
import http, { request } from 'node:http'
import path from 'node:path'
const port = 3000
const app = express()

app.listen(port, () => {
    console.log(`Successfully launched application to http://localhost:${port} while using HTPP`)
})
// send the file in ../public/index.html
// setting it to the root app.post('/products', (req,res) => {
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)

});
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/other-pages/about/about.html'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/other-pages/contact/contact.html'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});
// POSTS



app.get("/post-1", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_1.html'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get("/post-2", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_2.html'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get("/post-3", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_3.html'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get("/post-4", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_4.html'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get("/post-5", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_5.html'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get("/post-6", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_6.html'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get("/post-7", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_7.html'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get("/post-8", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_8.html'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get("/post-9", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_9.html'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get("/post-10", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/posts/post_10.html'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});


// OTHER FILES


app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/js/script.js'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/css/style.css'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get('/ico', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/favicon.ico'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
})

app.get('/acss', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/other-pages/about/about.css'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get('/ccss', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/other-pages/contact/contact.css'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});




// BLOG POST IMAGES




app.get('/b1', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-1.png'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get('/b2', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-2.png'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get('/b3', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-3.png'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get('/b4', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-4.png'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get('/b5', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-5.png'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get('/b6', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-6.png'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get('/b7', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-7.png'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get('/b8', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-8.png'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get('/b9', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-9.png'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});

app.get('/b10', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/images/blog-10.png'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});
app.get('/pcss', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/css/posts-css/post.css'));
    console.log(`Successfully Sent ${req.originalUrl} to ROOT app`)
});