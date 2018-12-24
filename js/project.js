const form = document.querySelector('#review-form');
const firstCardBody = document.querySelectorAll('.card-body')[0];
const secondCardBody = document.querySelectorAll('.card-body')[1];
const filter = document.querySelector('#filter');
const titleElement = document.querySelector('#title');
const authorElement = document.querySelector('#author');
const reviewElement = document.querySelector('#review');
const clear = document.getElementById("clear-books");


// UI Object
const ui = new UI();
// Storage Object
const storage = new Storage();

// Load all events
eventListeners();

function eventListeners(){
    form.addEventListener('submit', addBook);
    // When page is refreshed
    document.addEventListener('DOMContentLoaded', function(){
        let books = storage.getBooksFromStorage();
        ui.loadAllBooks(books);
    });
    secondCardBody.addEventListener('click',deleteReview);
    clear.addEventListener('click',clearAllBooks);

}

// Add Book
function addBook(e){
    const title = titleElement.value;
    const author = authorElement.value;
    const review = reviewElement.value;

    if(title === '' || author === '' || review === ''){
        // Return Error
        ui.displayMessages('Please fill the all areas', 'danger');
    }

    // Add Book with existing name and author also less than 40 character review
    else if(review.length < 40) {
        // New Book
        const newBook = new Book(title, author, review);
        
        // Add book to UI
        ui.addBookToUI(newBook);
        // Add book to Storage
        storage.addBookToStorage(newBook);
        // Display Success Message
        ui.displayMessages('Book is succesfully added', 'success');
    }

    ui.clearInputs(titleElement, authorElement, reviewElement);
    e.preventDefault();
}

// Delete Review
function deleteReview(e){
    if(e.target.id === "delete-review"){
        // Delete From UI call
        ui.deleteReviewFromUI(e.target);
        // Delete From Storage call
        bookTitle = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        storage.clearBookFromStorage(bookTitle);
        // Success message
        ui.displayMessages("Delete is completed", "success");

    }
}

function clearAllBooks(){
    if(confirm("Are you sure ?")){
        ui.deleteAllReviewsFromUI();
        storage.clearAllBooksFromStorage();
        ui.displayMessages('All Books Deleted','primary');
    }
}

