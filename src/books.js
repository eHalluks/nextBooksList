const booksFromLocalDataBase = [
    {
        title: 'Harry Potter i kamień filozoficzny',
        category:'Fantasy',
        author:'J.K Rowling',
        year: 1992,
        price: 49.99
    },
]

myFunRenderBooks = booksList => {
    bookList.innerHTML = '';
//descrution mode
    booksFromLocalDataBase.forEach(({title, category, author, year, price}) => {
        bookList.innerHTML += `
        <li>
            <h2>${title}</h2>
            <p><strong>Kategoria:</strong> ${category},</p>
            <p><strong>Autor:</strong> ${author},</p>
            <p><strong>Rok wydania:</strong> ${year},</p>
            <p><strong>Cena:</strong> ${price}zł,</p>
        </li>
    `
    })
};

myFunFilterBooks = event => {
    event.preventDefault();
    const foundBooks = booksFromLocalDataBase.filter(({title}) =>{
        return title.toLowerCase().includes(inputText.value);
    });
    myFunRenderBooks(foundBooks);
    inputText.focus();
    inputText.value = '';
};

