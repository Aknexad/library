//data

let myLibrary = [
  {
    title: 'lord of the rings',
    author: 'j.j taking',
    pages: 745,
    read: false,
  },
  {
    title: 'lord of the rings',
    author: 'j.j taking',
    pages: 745,
    read: false,
  },
  {
    title: 'lord of the rings',
    author: 'j.j taking',
    pages: 745,
    read: false,
  },
];

function Book(t, a, p, r) {
  (this.title = t),
    (this.author = a),
    (this.pages = p),
    this,
    (read = r);
}

function addToLaibrary() {
  let title = document.querySelector('#bookTitle').value;
  let author = document.querySelector('#bookAuthor').value;
  let pages = document.querySelector('#bookPages').value;
  let read = document.querySelector('#read').value;
  myLibrary.push(new Book(title, author, pages, true));
}

// UI

// render book in library
function randerBooks(my) {
  my.map((book) => {
    console.log(book);
    let card = document.createElement('div');
    card.classList.add('book');
    document
      .querySelector('.library')
      .insertAdjacentElement('afterbegin', card);
  });
}

// remove duplication
function removeDuplication() {
  let books = document.querySelectorAll('.book');
  books.forEach((element) => {
    element.remove();
  });
}

// open and close form function
let popUpForm = document.querySelector('.popupForm');
let closForm = document.querySelector('.closeBtn');

//
popUpForm.addEventListener('click', () => {
  document.querySelector('.popup').style.display = 'block';
});
closForm.addEventListener('click', () => {
  document.querySelector('.popup').style.display = 'none';
});

//add form input to library
let addBook = document.querySelector('.addBtn');

addBook.addEventListener('click', () => {
  removeDuplication();
  addToLaibrary();
  document.querySelector('.popup').style.display = 'none';
  randerBooks(myLibrary);
});
