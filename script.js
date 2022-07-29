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
  removeDuplication();
  my.map((book) => {
    let card = document.createElement('div');
    card.classList.add('book');
    card.innerHTML = `
    <h2 class="title">${book.title}</h2>
    <h2 class="author">${book.author}</h2>
    <h2 class="pages">${book.pages}</h2>
    <div class = 'cardBtn'>
      <button type="button" id='${book.id}' class='removeBtn'>
      REMOVE
      </button>
      <button type="button" class='readBtn ${book.id}'>
      READ
      </button>
    </div>  `;
    document
      .querySelector('.library')
      .insertAdjacentElement('afterbegin', card);

    // change read
    let read = document.getElementsByClassName(book.id);
    read[0].onclick = (e) => {
      if (book.read === true) {
        book.read = false;
        randerBooks(myLibrary);
      } else {
        book.read = true;
      }
      randerBooks(myLibrary);
    };
    // read or not
    if (book.read === true) {
      let a = document.getElementsByClassName(book.id);
      a[0].style.backgroundColor = 'green';
    } else {
      let b = document.getElementsByClassName(book.id);
      b[0].style.backgroundColor = 'red';
    }
    // remove book form library
    let removeBtn = document.getElementById(book.id);
    removeBtn.onclick = (e) => {
      deletBook(e.target.id, myLibrary);
      randerBooks(myLibrary);
    };
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
function deletBook(di, myLibrary) {
  let indexNum = myLibrary.findIndex(
    (element) => element.id === di
  );
  myLibrary.splice(indexNum, 1);
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
  addToLaibrary();
  document.querySelector('.popup').style.display = 'none';
  randerBooks(myLibrary);
});
