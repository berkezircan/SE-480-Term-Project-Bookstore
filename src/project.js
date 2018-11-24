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

eventListeners();

function eventListeners(){
    form.addEventListener('submit', addBook);
}

// function addBook(e){
//     const title = titleElement.value;
//     const author = authorElement.value;
//     const review = reviewElement.value;

//     if (title === "" || director === "" || url === "") {
//         // Error
    
//       }
//     else{
//         const newBook = new Book(title, author, review);

//         // Add UI To Book
//         ui.addBookToUI(newBook);
//     }
    
//     e.preventDefault();
// }