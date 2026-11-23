// 1. What are UML Relationships?
// // UML (Unified Modeling Language) is a visual way of representing the structure of software.

// Coding Challenge — Library Management System
// No solution provided — your turn
// Build a small library system using JavaScript classes.
// Requirements
// 1. Book class
// - Properties: title, author
// - Method: getDetails() — print the book's title and author.
// 2. Member class
// - Properties: name, memberId
// - Method: borrowBook(book) — borrow a book.
// - Method: returnBook(book) — return a book.
// 3. Library class
// - Store a collection of books.
// - Store a collection of members.
// - Method: addBook(book)
// - Method: addMember(member)
// - Method: showBooks() — display all available books.

class Book {
  constructor({ title, author }) {
    this.title = title;
    this.author = author;
    this.bookAvaible = true;
  }
  getDetails() {
    console.log(
      `title of book is ${this.title} and author of book is ${this.author} book avaible ${this.bookAvaible}`,
    );
  }
}

class Member {
  constructor({ name, memberID }) {
    this.name = name;
    this.memberID = memberID;
    this.borrowedBook = [];
  }
  borrowBook(book) {
    console.log(
      ` ${this.name} ${this.memberID} borrow a book name ${book.title}`,
    );
    this.borrowedBook.push(book);
    book.bookAvaible = false;
  }
  returnBook(book) {
    if (!this.borrowedBook.includes(book)) {
      console.log("You haven't borrowed this book");
      return;
    }

    console.log(
      ` ${this.name} ${this.memberID} retrun a book name ${book.title}`,
    );
    book.bookAvaible = true;
    this.borrowedBook = this.borrowedBook.filter(
      (borrowedBook) => borrowedBook !== book,
    );
  }
}

class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }
  addbooks(book) {
    this.books.push(book);
  }
  addMenber(member) {
    this.members.push(member);
  }
  showBooks() {
    console.log(
      this.books.filter((book) => book.bookAvaible).map((book) => book.title),
    );
  }
}
const book1 = new Book({ title: "Atomic Habits", author: "James Clear" });
const book2 = new Book({
  title: "Rich Dad Poor Dad",
  author: "Robert Kiyosaki",
});

const member1 = new Member({ name: "Aurpit", memberID: 101 });

const library = new Library();

library.addbooks(book1);
library.addbooks(book2);

library.addMenber(member1);

library.showBooks();

member1.borrowBook(book1);

library.showBooks();

member1.returnBook(book1);

library.showBooks();
