console.log('Test start BOOKS file')
const booksFromLocalDataBase = [
    {
        id: 0,
        title: 'JavaScript',
        category: 'Fantasy',
        author: 'UNKNOWN',
        year: 2022,
        price: 4.99,
    },
    {
        id: 0,
        title: 'Python',
        category: 'Fantasy',
        author: 'UNKNOWN',
        year: 2022,
        price: 6.99,
    },
    {
        id: 0,
        title: 'C sharp',
        category: 'Fantasy',
        author: 'UNKNOWN',
        year: 2022,
        price: 7.99,
    },
];
const tempArr = [];

//ES9 - if variable -eq (undefined || null || false) you can use operator ?? in re
const bookLibrary = JSON.parse(localStorage.getItem('books')) ?? booksFromLocalDataBase;

myFunAddIdToBook = () => {
    bookLibrary.forEach((element, i) => {
        element.id = i+1;
    })
}

myFunRenderBooks = booksOfList => {
    myFunAddIdToBook();
    booksList.innerHTML = '';
    booksOfList.forEach(({id ,title, category, author, year, price}) => {
        booksList.innerHTML += `
        <div class="grid-item">
            <li>
                <h2>${title}</h2>
                <p><strong>No: </strong>#${id}</p>
                <p><strong>Author: </strong>${category}</p>
                <p><strong>Category: </strong>${author}</p>
                <p><strong>Year: </strong>${year}</p>
                <p><strong>Price: </strong>${price} PLN</p>
            </li>
        </div>`
    });
}
myFunFilterBooks = event => {
    event.preventDefault();
    const foundBooks = bookLibrary.filter(({title}) => {
        return title.toLowerCase().includes(inputText.value.toLowerCase());
    })
    myFunRenderBooks(foundBooks);
    inputText.value = '';
    inputText.focus();
};

addNewBook = event => {
    event.preventDefault();
    addInputValue.forEach(element => {
        tempArr.push(element.value);
    })
    const book = {
        id: 0,
        title: tempArr[0],
        category: tempArr[1],
        author: tempArr[2],
        year :Number(tempArr[3]),
        price: Number(tempArr[4]),
    }
    bookLibrary.push(book);
    localStorage.setItem('books',JSON.stringify(bookLibrary));
    tempArr.length = 0;

    addInputValue.forEach(element => {
        element.value = '';
    });
    myFunRenderBooks(bookLibrary);
}

myFunInvokeRunRender = () => {
    myFunRenderBooks(bookLibrary);
}

