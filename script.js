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

addBookToLibrary('Bob', 'Tyrants', 150, false)
addBookToLibrary('Jeebus Heebus', 'Joe', 256, true)
displayBooks()
console.log(myLibrary)