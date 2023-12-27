const myLibrary = [];

class Library
{
    constructor(author, title, numberofpages)
    {
        this.author = author;
        this.title = title;
        this.numberofpages = numberofpages
    }

    //get numberOfPages() { return ` ${this.author } ${this.title} ${this.numberofpages}`; }
}

let library = new Library("Keita", "my library", 555);

myLibrary.push(library);

console.table(myLibrary)



function book(author, title, numberofpages)
{
    this.author = author;
    this.title = title;
    this.numberofpages = numberofpages
}
//const book1 = new book('Modibo', 'myBook', 1522);

//console.log(book1.author);

function addBookToLibrary(book)
 {
    myLibrary.push(book);
 }


 addBookToLibrary(new book('Modibo', 'myBook', 1222));
console.table(myLibrary);

const dialogEl = document.querySelector("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");


showBtn.addEventListener("click", () => {

    dialogEl.showModal();
});

closeBtn.addEventListener("click", () => {
    dialogEl.close();
});

