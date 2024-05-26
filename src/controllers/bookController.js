const { Book, Seller } = require('../models');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const createBook = async (req, res) => {
    const { title, author, price, publishedDate } = req.body;
    
    try {
        if( req.user.role!=="seller") res.status(400).json({message:"User is not authorized to create a book"});
        const book = await Book.create({
            title,
            author,
            price,
            publishedDate,
            SellerId: req.user.id
        });
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const createBooksFromCSV = async (req, res) => {
    console.log(req.file);
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    const results = [];
    const filePath = path.resolve(req.file.path);

    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => {
            results.push(data);
        })
        .on('end', async () => {
            try {
                const books = await Promise.all(
                    results.map(async (row) => {
                        const { title, author, price, publishedDate } = row;
                        return await Book.create({
                            title,
                            author,
                            price: parseFloat(price),
                            publishedDate: new Date(publishedDate),
                            SellerId: req.user.id
                        });
                    })
                );
                res.status(201).json(books);
            } catch (error) {
                res.status(400).json({ error: error.message });
            } finally {
                fs.unlinkSync(filePath); 
            }
        });
};


const getBooks = async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
};


const getBookById = async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
};


const updateBook = async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) 
        return res.status(404).json({ error: 'Book not found' });
    if (book.SellerId !== req.user.id) 
        return res.status(403).json({ 
            error: 'Not authorized' 
        });

    await book.update(req.body);
    res.json(book);
};


const deleteBook = async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    if (book.SellerId !== req.user.id && req.user.role!=="seller") return res.status(403).json({ error: 'Not authorized' });

    await book.destroy();
    res.status(204).json({message:"Book deleted"});
};

module.exports = { 
    createBook, 
    createBooksFromCSV, 
    getBooks, 
    getBookById, 
    updateBook, 
    deleteBook 
};
