//data

let myLibrary = [
  {
    title: 'Clean Code',
    author: 'Robert Cecil Martin',
    pages: 202,
    read: true,
    id: randomId(),
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andy Hunt and Dave Thomas',
    pages: 123,
    read: false,
    id: randomId(),
  },
  {
    title: 'Introduction to Algorithms',
    author:
      'Thomas H. Cormen, Charles E. Leiserson, Ronald Rivest, Clifford Stein',
    pages: 234,
    read: false,
    id: randomId(),
  },
];

function Book(t, a, p, r) {
  (this.title = t),
    (this.author = a),
    (this.pages = p),
    (this.read = r);
  this.id = randomId();
}

function addToLaibrary() {
  let title = document.querySelector('#bookTitle').value;
  let author = document.querySelector('#bookAuthor').value;
  let pages = document.querySelector('#bookPages').value;
  let read = document.querySelector('#read').value;
  myLibrary.push(new Book(title, author, pages, true));
}

// generate unique id
function randomId() {
  const uint32 = window.crypto.getRandomValues(
    new Uint32Array(1)
  )[0];
  return uint32.toString(16);
}

// UI

// render book in library
function randerBooks(my) {
  my.map((book) => {
    let card = document.createElement('div');
    card.classList.add('book');
    card.innerHTML = `
    <h2 class="title">${book.title}</h2>
    <h2 class="author">${book.author}</h2>
    <h2 class="pages">${book.pages}</h2>
    <button type="button" id='${book.id}'>
    remove
  </button>`;
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

// delet book form library
function deletBook(di) {
  let indexNum = myLibrary.findIndex(
    (element) => element.title === di
  );
  myLibrary.splice(indexNum, 1);
}

//event listener for delet book
console.log(myLibrary);

// let deletBtn = document.querySelectorAll('.removeBtn');
// deletBtn.forEach((element) => {
//   element.addEventListener('click', () => {
//     let deleteItem =
//       element.parentElement.children[0].textContent;

//     deletBook(deleteItem);
//     removeDuplication();
//     randerBooks(myLibrary);
//     console.log(document.querySelectorAll('.removeBtn'));
//     console.log(Date());
//   });
// });

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
