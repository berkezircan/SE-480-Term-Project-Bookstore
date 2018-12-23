const form = document.querySelector('#review-form');
const firstCardBody = document.querySelectorAll('.card-body')[0];
const secondCardBody = document.querySelectorAll('.card-body')[1];
const filter = document.querySelector('#filter');
const titleElement = document.querySelector('#title');
const authorElement = document.querySelector('#author');
const reviewElement = document.querySelector('#review');

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
        
    })
}

// Add Book
function addBook(e){
    const title = titleElement.value;
    const author = authorElement.value;
    const review = reviewElement.value;

    if(title === '' || author === '' || review === ''){
        // Return Error
    }

    // Add Book with existing name and author also less than 40 character review
    else if(review.length < 40) {
        // New Book
        const newBook = new Book(title, author, review);
        
        // Add book to UI
        ui.addBookToUI(newBook);
        // Add book to Storage
        storage.addBookToStorage(newBook);
    }

    ui.clearInputs(titleElement, authorElement, reviewElement);
    e.preventDefault();
}