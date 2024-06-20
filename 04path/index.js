const express = require('express')
const app = express();
const booksRoutes = require('./routes/bookRoutes')

app.use(express.json())
app.use('/', booksRoutes)

app.listen(3000, () =>{
    console.log('server is running...');
})