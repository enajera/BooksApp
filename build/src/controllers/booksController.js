"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksController = void 0;
class BooksController {
    index(req, res) {
        res.render('books/index', { title: 'Libros' });
    }
    renderFormBook(req, res) {
        res.render('books/add', {
            title: 'Add a Book'
        });
    }
    saveBook(req, res) {
        console.log(req.body);
        res.send('received');
    }
}
exports.booksController = new BooksController();
