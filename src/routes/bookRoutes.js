const express = require('express');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { createBook, createBooksFromCSV, getBooks, getBookById, updateBook, deleteBook } = require('../controllers/bookController');
const upload = require('../middlewares/uploadMiddleware');
const router = express.Router();

router.post('/create', authenticateToken, createBook);
router.post('/upload', authenticateToken, upload.single('file'), createBooksFromCSV);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.put('/update/:id', authenticateToken, updateBook);
router.delete('/:id', authenticateToken, deleteBook);

module.exports = router;
