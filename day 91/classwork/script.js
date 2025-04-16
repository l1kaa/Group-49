class Library {
    #bookTitle;
    #bookAuthor;
    #checkedOut = false;

    constructor(bookTitle, bookAuthor) {
    this.#bookTitle = bookTitle;
    this.#bookAuthor = bookAuthor;
    }

    #checkedOutstatus() {
    this.#checkedOut = !this.#checkedOut;
    }

    checkOut() {
    if (!this.#checkedOut) this.#checkedOutstatus();
    }

    returnBook() {
    if (this.#checkedOut) this.#checkedOutstatus();
    }

    getBookInfo() {
    return `${this.#bookTitle} by ${this.#bookAuthor}`;
    }
}

const book1 = new Library("The stranger", "Albert Camus")
book1.getBookInfo()