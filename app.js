// =============================
// Includes index.html's javascript issues

// Selectors
document.getElementById('ajax').addEventListener('click',getAllBooks);

// Get Year
$('#year').text(new Date().getFullYear());

// ============================
// Ajax With JSON
function getAllBooks(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","book.json",true);

    xhr.onload = function(){
        // Select table
        let list = document.getElementById('books');

        if(this.status === 200){
            // Parse Array
            const books = JSON.parse(this.responseText);
            // Traverse On Array
            books.forEach(function(book){
                // Add Rows
                list.innerHTML += `
                <tr>
                    <th scope='row'>${book.id}</th>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td ><img class="book align-middle" src=${book.cover}  alt=""></td>
                <tr>
                `

                // Change height of the div
                $('#best-seller-book').css('height','2100px');
                // Change Button css
                $('#ajax').addClass('disabled')
            })
        }
    }
    xhr.send();
}

// =========================================
// Scroolspy
$('body').scrollspy({ target: '#main-nav' });
    
// Add smooth scrolling
$('#main-nav a').on('click', function (e) {
  // Check for a hash value
  if (this.hash !== '') {
    // Prevent default behavior
    e.preventDefault();
    // Store hash
    const hash = this.hash;
    // Animate smooth scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1500, function () {
      // Add hash to URL after scroll
      window.location.hash = hash;
    });
  }
});

// =================================
// Slider
$('.carousel').carousel({
    interval: 3000,
    pause: 'hover'
  });

// ================================
// Light Box -> Transparan images !
// Add Cdn first

    // Lightbox Init
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// TODO : Add lightbox for photos

// =========================================
// News FadeIn and Fade Out Section
let text1 = document.querySelector('#text1');
let text2 = document.querySelector('#text2');

let counter = true;

const changeText = () => {
    setInterval(() => {
        if(counter === true){
            // Text's First Situation    
            text1.textContent = 'Text1';
            text2.textContent = 'Text2';
            // Add Effects 
            $('.newText').fadeOut().fadeIn();  
            // Turn Second
            counter = false;
        }else{       
            // Text's Second Situation
            text1.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, est?';
            text2.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, est?';
            // Add Effects
            $('.newText').fadeOut().fadeIn();
            // Turn First
            counter = true;
        }
        
    },3000)
}
// Function Call of Pop Up Messages
changeText();












