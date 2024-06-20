let books = [
    {id:1, title: 'book1', author: 'Author 1'},
    {id:2, title: 'book2', author: 'Author 2'}
]

//read
const getBooks = (req, res)=>{
    res.json(books);
}

//create
const createBooks = (req, res) => {
    console.log(req.body);
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);
}

//update
const updateBooks = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    const index = books.findIndex(book => book.id === id);
    if(index != -1){
        books[index] = {...books[index], ...updatedBook};
        req.json(books[index])
    }
    else{
        req.status(404).json({error: 'book not found'});
    }
}

//delete
const deleteBooks = (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);
    if(index != -1){
        const deleteBook = books[index];
        books.slice(index, 1);
        res.json(deleteBook);
    }
    else{
        res.status(404).json({error: 'book not found'});
    }
}

module.exports = {
    getBooks,
    createBooks,
    updateBooks,
    deleteBooks
}