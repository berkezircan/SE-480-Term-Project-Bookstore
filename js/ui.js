function UI(){
    
}

// Add Book To UI Function
UI.prototype.addBookToUI = function(newBook) {
    const bookList = document.getElementById('books');

    bookList.innerHTML += `
        <tr>
            <td>${newBook.title}</td>
            <td>${newBook.author}</td>
            <td>${newBook.review}</td>
            <td><a href = "#" id="delete-review" class="btn btn-primary">Delete Review</a></td>
        </tr>
    `
}

// Clear Inputs When Page is Refreshed
UI.prototype.clearInputs = function (e1, e2, e3) {
    e1.value = '';
    e2.value = '';
    e3.value = '';
}

// Load All Books When You Enter or refreshed The Page
UI.prototype.loadAllBooks = function(books){
    const bookList = document.getElementById('books');

    books.forEach(function(book){
        bookList.innerHTML +=
         `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.review}</td>
            <td><a href = "#" id="delete-review" class="btn btn-primary">Delete Review</a></td>
        </tr>
        `
    })
}

// Display Error or Success Messages
UI.prototype.displayMessages = function(message, type) {
    const cardBody = document.querySelectorAll('.card-body')[0];

    // Alert Div
    div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    // Make The Message Popup
    setTimeout(function(){
        div.remove();
    },2000);
}

// Delete a review
UI.prototype.deleteReviewFromUI = function(e) {
    e.parentElement.parentElement.remove();
}

// Delete All Reviews
UI.prototype.deleteAllReviewsFromUI = function(){
    const bookList = document.getElementById('books');

    bookList.innerHTML = '';

    
}