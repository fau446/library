class Book {
  constructor(name, author, pages, isRead) {
    this.name = name
    this.author = author
    this.pages = pages
    this.isRead = isRead === "true" ? "Read" : "Not read"
  }
}

class Library {
  constructor() {
    this.myLibrary = []
  }

  addBookToLibrary(name, author, pages, isRead) {
    const newBook = new Book(name, author, pages, isRead)
    this.myLibrary.push(newBook)
  }
}

let library = new Library

//cache DOM
let addBook = document.querySelector(".add-book")
let table = document.querySelector(".books")
let overlay = document.querySelector("#overlay")
let submitBtn = document.querySelector(".submit")
let modal = document.querySelector(".modal")
let bookName = document.querySelector("#book-name")
let author = document.querySelector("#author")
let pages = document.querySelector("#pages")
let isRead = document.querySelector("input[name='read']:checked")

//bind events
addBook.addEventListener("click", displayModal)
overlay.addEventListener("click", hideModal)
submitBtn.addEventListener("click", submitBook)

function submitBook() {
  library.addBookToLibrary(bookName.value, author.value, pages.value, isRead.value)
  displayBooks()
  hideModal()
  resetInputFields(bookName, author, pages)
}

function displayBooks() {
  resetTable(table)
  for (let i = 0; i < library.myLibrary.length; i++) {
    let row = table.insertRow(i + 1)
    row.dataset.indexNumber = i
    let nameCell = row.insertCell(0)
    let authorCell = row.insertCell(1)
    let pageCell = row.insertCell(2)
    let isReadCell = row.insertCell(3)
    let delBtnCell = row.insertCell(4)
    let readBtnCell = row.insertCell(5)

    nameCell.innerHTML = library.myLibrary[i].name
    authorCell.innerHTML = library.myLibrary[i].author
    pageCell.innerHTML = library.myLibrary[i].pages
    isReadCell.innerHTML = library.myLibrary[i].isRead

    let delBtn = createBtn("delete", i)
    delBtn.innerHTML = "Delete"
    delBtn.onclick = function() {
      library.myLibrary.splice(delBtn.dataset.indexNumber, 1)
      displayBooks()
    }
    delBtnCell.appendChild(delBtn)

    let readBtn = createBtn("read-btn", i)
    readBtn.innerHTML = isReadCell.innerHTML === "Read" ? "Not read" : "Read"
    readBtn.onclick = function() {
      library.myLibrary[i].isRead = library.myLibrary[i].isRead === "Read" ? "Not read" : "Read"
      isReadCell.innerHTML = library.myLibrary[i].isRead
      readBtn.innerHTML = isReadCell.innerHTML === "Read" ? "Not read" : "Read"
    }
    readBtnCell.appendChild(readBtn)
  }
}

function createBtn(className, i) {
  let btn = document.createElement("button")
  btn.classList.add(`${className}`)
  btn.dataset.indexNumber = i
  return btn
}

function resetTable(table) {
  let tableRowLength = table.rows.length
  if (tableRowLength === 1) {
    return
  }
  
  for (let i = 1; i < tableRowLength; i++) {
    table.deleteRow(1)
  }
}

function displayModal() {
  modal.classList.add("active")
  overlay.classList.add("active")
}

function hideModal() {
  modal.classList.remove("active")
  overlay.classList.remove("active")
}

function resetInputFields(bookName, author, pages) {
  bookName.value = ''
  author.value = ''
  pages.value = ''
  document.querySelector("#true").checked = true
}