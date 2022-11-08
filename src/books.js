const books = [
    {
        title: 'Harry Potter i kamień filozoficzny',
        category:'Fantasy',
        author:'J.K Rowling',
        year: 1992,
        price: 49.99
    },
]

myFunDisplayBooksInHtml = bookList => {
//descrution mode
    books.forEach(({title, category, author, year, price}) => {
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



