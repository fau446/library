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
addBook.addEventListener("click", function () {
  let form = document.querySelector("form")
  form.className = form.className === 'hidden' ? '' : 'hidden'
})

addBookToLibrary('Bob', 'Tyrants', false)
addBookToLibrary('Jeebus Heebus', 'Joe', true)
displayBooks()