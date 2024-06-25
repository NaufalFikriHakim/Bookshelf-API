const {addBooksHandler, getBooks, getBooksDetail, updateBooks, deleteBooks} = require('./handler');
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
    },
    {
        method:'PUT',
        path: '/books/{booksId}',
        handler: updateBooks,
    },
    {
        method:'DELETE',
        path: '/books/{booksId}',
        handler: deleteBooks,
    },
]

module.exports = routes;