const express = require('express');
const path = require('path')
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello express</h1>')
})

app.get('/contact', (req, res) => {
    res.send('<h1>Contact</h1>')
})

app.get('/files', (req, res) => {
    res.sendFile(path.join(__dirname, 'hel.html'))
})

app.get('/jsonexample', (req, res) => {
    res.json([
        {
            first: "anshu",
            last: "kumar"
        },
        {
            first: "abhi",
            last: "yadav"
        }
    ])
})

app.listen(3000, () => {
    console.log("server is running");
})
