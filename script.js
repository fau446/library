let myLibrary = [];

function Book(name, author, isRead) {
  // the constructor...
  this.name = name
  this.author = author
  this.isRead = isRead
}

function addBookToLibrary(name, author, isRead) {
  // do stuff here
  const newBook = new Book(name, author, isRead)
  myLibrary.push(newBook)
}