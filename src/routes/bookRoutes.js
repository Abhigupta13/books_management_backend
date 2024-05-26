const express = require('express');
const  validateUser  = require('../middlewares/authMiddleware');
const { createBook, createBooksFromCSV, getBooks, getBookById, updateBook, deleteBook } = require('../controllers/bookController');
const upload = require('../middlewares/uploadMiddleware');
const router = express.Router();

router.post('/create', validateUser, createBook);
router.post('/upload', validateUser, upload.single('file'), createBooksFromCSV);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.put('/update/:id', validateUser, updateBook);
router.delete('/:id', validateUser, deleteBook);

module.exports = router;
