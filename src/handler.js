const books = require('./books');
const { nanoid } = require('nanoid');

const addBooksHandler = (request, h) => {
    const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload;
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = pageCount == readPage

    const newBook = {
        id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt, 
    };

    if (name == '') {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
          });
          response.code(400);

          return response;
    } else if (readPage > pageCount){
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
          });
          response.code(400);

          return response;
    } else {
        books.push(newBook);

        const response  = h.response({
            status: 'success',
            message: 'Buku berhasi ditambahkan',
            data: {
                bookId: id,
            }
        });

        response.code = 201;

        return response;
    }
}

const getBooks = (request, h) => {
    const response = h.response({
        status: 'success',
        data: {
            books: books
        },
    });

    response.code = 200;

    return response;
}

const getBooksDetail = (request, h) => {
    const {booksId} = request.params;
    const result = books.filter((book) => book.id == booksId);

    if (result.length > 0) {
        const response = h.response({
            status: 'success',
            data: {
                book: result[0]
            },
        });

        response.code = 200;

        return response;
    } else {
        const response = h.response({
            status: 'fail',
            message: 'Buku tidak ditemukan',
        });

        response.code = 404;

        return response;
    }
}

const updateBooks = (request, h) => {
    const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload;
    const {bookId} = request.params;
    const index = books.findIndex((book) => book.id = )
}

module.exports = {addBooksHandler, getBooks, getBooksDetail}