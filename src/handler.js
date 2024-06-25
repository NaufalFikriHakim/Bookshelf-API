const books = require('./books')
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
        
        return response;
    }
}

module.exports = {addBooksHandler}