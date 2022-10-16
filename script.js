let myLibrary = [];

function Book(name, author, pages, isRead) {
  this.name = name
  this.author = author
  this.pages = pages
  this.isRead = isRead
}

function addBookToLibrary(name, author, pages, isRead) {
  const newBook = new Book(name, author, pages, isRead)
  myLibrary.push(newBook)
}

function displayBooks() {
  let table = document.querySelector(".books")
  for (let i = 0; i < myLibrary.length; i++) {
    let row = table.insertRow(i + 1)
    let nameCell = row.insertCell(0)
    let authorCell = row.insertCell(1)
    let pageCell = row.insertCell(2)
    let isReadCell = row.insertCell(3)

    nameCell.innerHTML = myLibrary[i].name
    authorCell.innerHTML = myLibrary[i].author
    pageCell.innerHTML = myLibrary[i].pages
    isReadCell.innerHTML = myLibrary[i].isRead
  }
}

function displayModal(modal) {
  modal.classList.add("active")
  overlay.classList.add("active")
}

function hideModal(modal) {
  modal.classList.remove("active")
  overlay.classList.remove("active")
}

let addBook = document.querySelector(".add-book")
let overlay = document.querySelector("#overlay")
let submitButton = document.querySelector(".submit")
addBook.addEventListener("click", function() {
  let modal = document.querySelector(".modal")
  displayModal(modal)
})

overlay.addEventListener("click", function() {
  let modal = document.querySelector(".modal")
  hideModal(modal)
})

submitButton.addEventListener("click", function() {
  let bookName = document.querySelector("#book-name")
  let author = document.querySelector("#author")
  let pages = document.querySelector("#pages")
  let isRead = document.querySelector("input[name='read']:checked")
  addBookToLibrary(bookName.value, author.value, pages.value, isRead.value)
  displayBooks()
  modal.classList.remove("active")
  overlay.classList.remove("active")
})