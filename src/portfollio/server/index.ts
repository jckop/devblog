import express from 'express';
import path from 'node:path';

let app = express()
let port = 2600

app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, '/pages/index.html')) 
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/css/style.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/js/script.js'))
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))