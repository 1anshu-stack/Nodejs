const express = require('express')
const bodyparser = require('body-parser')


const app = express();

app.use(bodyparser.urlencoded({extended:false}))

app.use('/add-product', (req, res, next) => {
    res.send(`<form action="/product" method="POST"><input type="text" name="name" value="John"><button type="submit">Submit</button></form>`)
})

app.use('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    // console.log("in another middleware")
    res.send(`<h1>hello from express</h1>`)
})


app.listen(3000)