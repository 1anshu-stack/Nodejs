const express =  require('express')
const bookControler = require('../controler/bookControler');
const router = express.Router();

router.get('/books', bookControler.getBooks);
router.post('/books', bookControler.createBooks);
router.put('/books/:id', bookControler.updateBooks);
router.delete('/books/:id', bookControler.deleteBooks);

module.exports = router;