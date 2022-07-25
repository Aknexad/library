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
  myLibrary.push(Book());
}

// UI

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
