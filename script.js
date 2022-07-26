//data

let myLibrary = [
  {
    title: 'Clean Code',
    author: 'Robert Cecil Martin',
    pages: 202,
    read: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andy Hunt and Dave Thomas',
    pages: 123,
    read: false,
  },
  {
    title: 'Introduction to Algorithms',
    author:
      'Thomas H. Cormen, Charles E. Leiserson, Ronald Rivest, Clifford Stein',
    pages: 234,
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
    card.innerHTML = `
    <h2 class="title">${book.title}</h2>
    <h2 class="author">${book.author}</h2>
    <h2 class="pages">${book.pages}</h2>`;
    document
      .querySelector('.library')
      .insertAdjacentElement('afterbegin', card);
  });
}

// render existing book
randerBooks(myLibrary);

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
