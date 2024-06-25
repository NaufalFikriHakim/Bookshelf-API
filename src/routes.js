const {addBooksHandler, getBooks} = require('./handler');
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
]

module.exports = routes;