const myLibrary = [];

function book(author, title, numberofpages)
{
    this.author = author;
    this.title = title;
    this.numberofpages = numberofpages
}
const book1 = new book('Modibo', 'myBook', 1222);

//console.log(book1.author);

function addBookToLibrary(book)
 {
    myLibrary.push(book);
 }
 function displayLibrary()
 {
    for (let i = 0; i < myLibrary.length; i++)
    {
        const book = myLibrary[i];
        console.log(`Title: ${book.title},Author: ${book.author}, pages: ${book.numberofpages}`);
    }
 }

 addBookToLibrary(new book('Modibo', 'myBook', 1222));
console.table(myLibrary);

const labrarycontent = document.querySelector('labrary-container');

