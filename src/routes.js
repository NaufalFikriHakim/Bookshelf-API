const {addBooksHandler, getBooks, getBooksDetail} = require('./handler');
const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooksHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getBooks,
    },
    {
        method:'GET',
        path: '/books/{booksId}',
        handler: getBooksDetail,
    }
]

module.exports = routes;