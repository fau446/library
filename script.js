let myLibrary = [];

function Book(name, author, isRead) {
  this.name = name
  this.author = author
  this.isRead = isRead
}

function addBookToLibrary(name, author, isRead) {
  const newBook = new Book(name, author, isRead)
  myLibrary.push(newBook)
}

function displayBooks() {
  let table = document.querySelector(".books")
  for (let i = 0; i < myLibrary.length; i++) {
    let row = table.insertRow(i)
    let nameCell = row.insertCell(0)
    let authorCell = row.insertCell(1)
    let isReadCell = row.insertCell(2)

    nameCell.innerHTML = myLibrary[i].name
    authorCell.innerHTML = myLibrary[i].author
    isReadCell.innerHTML = myLibrary[i].isRead
  }
}

let addBook = document.querySelector(".add-book")
let modal = document.querySelector(".modal")
let overlay = document.querySelector("#overlay")
addBook.addEventListener("click", function () {
  modal.classList.add("active")
  overlay.classList.add("active")
})

overlay.addEventListener("click", function () {
  modal.classList.remove("active")
  overlay.classList.remove("active")
})

addBookToLibrary('Bob', 'Tyrants', false)
addBookToLibrary('Jeebus Heebus', 'Joe', true)
addBookToLibrary('Jeebus Heebus', 'Joe', true)
addBookToLibrary('Bob', 'Tyrants', false)
addBookToLibrary('Jeebus Heebus', 'Joe', true)
addBookToLibrary('Jeebus Heebus', 'Joe', true)
addBookToLibrary('Bob', 'Tyrants', false)
addBookToLibrary('Jeebus Heebus', 'Joe', true)
addBookToLibrary('Jeebus Heebus', 'Joe', true)
addBookToLibrary('Bob', 'Tyrants', false)
addBookToLibrary('Jeebus Heebus', 'Joe', true)
addBookToLibrary('Jeebus Heebus', 'Joe', true)
addBookToLibrary('Bob', 'Tyrants', false)
addBookToLibrary('Jeebus Heebus', 'Joe', true)
addBookToLibrary('Jeebus Heebus', 'Joe', true)
addBookToLibrary('Bob', 'Tyrants', false)
addBookToLibrary('Jeebus Heebus', 'Joe', true)
addBookToLibrary('Jeebus Heebus', 'Joe', true)
displayBooks()