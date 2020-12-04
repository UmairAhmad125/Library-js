const addBook = document.querySelector('.addbook');
const modal = document.querySelector('.modal-d');
const maincont = document.querySelector('.maincont');
const btnclose = document.querySelector('.close');
const submit = document.querySelector('.submit-btn');
const bookName = document.getElementById('bookName');
const bookAuthor = document.getElementById('bookAuthor');
const numPages = document.getElementById('pages');
const readStatus = document.getElementById('status');
const bookcontainer = document.querySelector('.bookcont');


const myBooks = [{
  name: 'Harry potter',
  author: 'Jk Rowling',
  pages: 301,
  status: 'Finished',
}];

function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function reset() {
  document.getElementById('bname').style.display = 'none';
  document.getElementById('bauth').style.display = 'none';
  document.getElementById('bpages').style.display = 'none';
}

addBook.addEventListener('click', () => {
  modal.classList.add('show');
  maincont.classList.add('hide');
  reset();
});

function addBooktolibrary() {
  const name = bookName.value;
  const author = bookAuthor.value;
  const pages = numPages.value;
  const status = readStatus.value;
  const book = new Book(name, author, pages, status);
  myBooks.push(book);
}

function displaybook() {
  bookcontainer.innerHTML = '';

  myBooks.forEach((item, index) => {
    const card = document.createElement('div');
    console.log(card);
    card.className = 'col-6';
    card.innerHTML = `<div class="card text-dark bg-white mb-3" >
  <li class="list-group-item d-flex justify-content-between"><p class="bg-dark px-2 py-1 text-white">${index + 1}</p><a href="#" class="delete text-danger" onclick="removeBook(${index})" >X</a></li>
  <li class="list-group-item "> Book Name: ${item.name}</li>
  <li class="list-group-item ">Author Name: ${item.author}</li>
  <li class="list-group-item ">Number of pages: ${item.pages}</li>
  <li class="list-group-item "><a href="#" class="btn-warning px-2 py-1 rounded status">${item.status}</a></li>
  </div>`;
    bookcontainer.appendChild(card);
  });
}

function clearfield() {
  bookName.value = '';
  bookAuthor.value = '';
  numPages.value = '';
}

window.addEventListener('DOMContentLoaded', displaybook);

btnclose.addEventListener('click', () => {
  modal.classList.remove('show');
  maincont.classList.remove('hide');
});

function validate() {
  let status = true;
  if (bookName.value === '') {
    document.getElementById('bname').style.display = 'block';
    status = false;
    document.bookName.focus();
  }
  if (bookAuthor.value === '') {
    document.getElementById('bauth').style.display = 'block';
    status = false;
    document.bookAuthor.focus();
  }
  if (numPages.value === '') {
    document.getElementById('bpages').style.display = 'block';
    status = false;
    document.numPages.focus();
  }
  return status;
}

submit.addEventListener('click', (e) => {
  if (validate() === true) {
    e.preventDefault();
    addBooktolibrary();
    clearfield();
    displaybook();
    modal.classList.remove('show');
    maincont.classList.remove('hide');
  } else {
    e.stopPropagation();
    clearfield();
    return false;
  }
  return true;
});

function changestatus(e) {
  if (e.target.classList.contains('status')) {
    if (e.target.textContent === 'Finished') {
      e.target.textContent = 'Yet to read';
    } else { e.target.textContent = 'Finished'; }
  }
}

bookcontainer.addEventListener('click', changestatus);


function removeBook(index) {
  myBooks.splice(index, 1);
  displaybook();
}
window.onload(removeBook(1));