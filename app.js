document.getElementById('ajax').addEventListener('click',getAllBooks);

// Get Year
$('#year').text(new Date().getFullYear());

// ============================
// Ajax With JSON
function getAllBooks(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","book.json",true);

    xhr.onload = function(){
        let list = document.getElementById('books');

        if(this.status === 200){
            const books = JSON.parse(this.responseText);
            books.forEach(function(book){
                list.innerHTML += `
                <tr>
                    <th scope='row'>${book.id}</th>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td ><img class="book align-middle" src=${book.cover}  alt=""></td>
                <tr>

                `

                // Change height of the div
                $('#best-seller-book').css('height','2000px');
                // Change Button css
                $('#ajax').addClass('disabled')
            })
        }
    }
    xhr.send();
}



