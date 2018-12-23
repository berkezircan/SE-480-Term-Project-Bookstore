// Constructor Function Of Storage
function Storage(){

}

// Save values at storage
Storage.prototype.addBookToStorage = function(newBook) {
    let books = this.getBooksFromStorage();

    books.push(newBook);

    localStorage.setItem('books', JSON.stringify(books));
}

// Get values from storage
Storage.prototype.getBooksFromStorage = function() {
    let books;

    if(localStorage.getItem('books') === null) {
        books = [];
    }
    else {
        books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
}