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

myFunAddIdToBook = () => {
    booksFromLocalDataBase.forEach((element, i) => {
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
                <p><strong>Price: </strong>${price}zł</p>
            </li>
        </div>`
    });
}
myFunFilterBooks = event => {
    event.preventDefault();
    const foundBooks = booksFromLocalDataBase.filter(({title}) => {
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
    booksFromLocalDataBase.push(book)
    tempArr.length = 0;

    addInputValue.forEach(element => {
        element.value = '';
    });
    myFunRenderBooks(booksFromLocalDataBase);
}

myFunInvokeRunRender = () => {
    myFunRenderBooks(booksFromLocalDataBase);
}

