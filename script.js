let myLibrary = []

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
  resetTable(table)
  for (let i = 0; i < myLibrary.length; i++) {
    let row = table.insertRow(i + 1)
    row.dataset.indexNumber = i
    let nameCell = row.insertCell(0)
    let authorCell = row.insertCell(1)
    let pageCell = row.insertCell(2)
    let isReadCell = row.insertCell(3)
    let delBtnCell = row.insertCell(4)

    nameCell.innerHTML = myLibrary[i].name
    authorCell.innerHTML = myLibrary[i].author
    pageCell.innerHTML = myLibrary[i].pages
    isReadCell.innerHTML = myLibrary[i].isRead

    let delBtn = createBtn("Delete")
    delBtn.dataset.indexNumber = i
    delBtn.onclick = function() {
      myLibrary.splice(delBtn.dataset.indexNumber, 1)
      displayBooks()
    }
    delBtnCell.appendChild(delBtn)
  }
}

function createBtn(btnName) {
  let btn = document.createElement("button")
  btn.innerHTML = `${btnName}`
  btn.classList.add(`${btnName.toLowerCase()}`)
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

function displayModal(modal) {
  modal.classList.add("active")
  overlay.classList.add("active")
}

function hideModal(modal) {
  modal.classList.remove("active")
  overlay.classList.remove("active")
}

function resetInputFields(bookName, author, pages) {
  bookName.value = ''
  author.value = ''
  pages.value = ''
  document.querySelector("#true").checked = true
}

let addBook = document.querySelector(".add-book")
let overlay = document.querySelector("#overlay")
let submitBtn = document.querySelector(".submit")
addBook.addEventListener("click", function() {
  let modal = document.querySelector(".modal")
  displayModal(modal)
})

overlay.addEventListener("click", function() {
  let modal = document.querySelector(".modal")
  hideModal(modal)
})

submitBtn.addEventListener("click", function() {
  let bookName = document.querySelector("#book-name")
  let author = document.querySelector("#author")
  let pages = document.querySelector("#pages")
  let isRead = document.querySelector("input[name='read']:checked")
  addBookToLibrary(bookName.value, author.value, pages.value, isRead.value)
  displayBooks()
  hideModal(modal)
  resetInputFields(bookName, author, pages)
})