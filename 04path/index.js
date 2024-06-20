const express = require('express')
const app = express();

let books = [
    {id:1, title: 'book1', author: 'Author 1'},
    {id:2, title: 'book2', author: 'Author 2'}
]

app.get('/', (req, res)=>{
    res.json(books);
})

app.listen(3000, () =>{
    console.log('server is running...');
})