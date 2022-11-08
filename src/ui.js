console.log('Test start UI file')
const newBook = document.querySelector('#newBook');
const booksList = document.querySelector('#list');
const booksForm = document.querySelector('#booksForm');
const inputText = document.querySelector('[data-name="input-text"]');
const addInputValue = document.querySelectorAll('[data-name="addInputValue"]');

myFunInvokeRunRender()
booksForm.addEventListener('submit', myFunFilterBooks);
newBook.addEventListener('submit', addNewBook);