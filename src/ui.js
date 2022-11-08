console.log('Start test');

const bookList = document.querySelector('#list');
const booksForm = document.querySelector('#booksForm');
const inputText = document.querySelector('[data-name="searchInput"]');

myFunRenderBooks(bookList);

booksForm.addEventListener('submit', myFunFilterBooks)


