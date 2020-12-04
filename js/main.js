const addBook = document.querySelector('.addbook');
const modal = document.querySelector(".modal-d");
const maincont = document.querySelector(".maincont");
const btnclose = document.querySelector(".close");
const submit = document.querySelector(".submit-btn");
const bookName = document.getElementById("bookName");
const bookAuthor = document.getElementById("bookAuthor");
const numPages = document.getElementById("pages");
const readStatus = document.getElementById("status");
const bookcontainer=document.querySelector(".bookcont");

let myBooks = [ {name:"Harry potter", author:"Jk Rowling",pages:301, status:"Finished"}];

function Book(name, author, pages,status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status=status
}

addBook.addEventListener("click", function() {
    modal.classList.add("show");
    maincont.classList.add("hide");
})


function addBooktolibrary(){
  const name = bookName.value;
  const author = bookAuthor.value;
  const pages = numPages.value;
  const status = readStatus.value;
  const book = new Book(name, author, pages,status);
  myBooks.push(book);
}

submit.addEventListener("click", function(e) {
    //e.preventDefault();
    const name = bookName.value;
    const author = bookAuthor.value;
    const pages = numPages.value;
    const status = readStatus.value;
    const Book1 = new Book(name, author, pages);
    myBooks.push(Book1);
    console.log(myBooks);
})
console.log(myBooks);


btnclose.addEventListener("click", function() {
    modal.classList.remove("show");
    maincont.classList.remove("hide");

})
