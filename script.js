// The Array
const myLibrary = []; // book objects go here

// The Constructor
function Book(title, author, pageCount, completionStatus, image) {
  if (!new.target) {
    throw Error("You must use the 'new' keyword to create a new object.");
  }

  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.completionStatus = completionStatus;
  this.image = image;
  this.id = crypto.randomUUID();
}

// Create and Store Book
function addBookToLibrary(title, author, pageCount, completionStatus, image) {
  let newBook = new Book(title, author, pageCount, completionStatus, image);
  myLibrary.push(newBook);
}

// Display Books - Loop Through Array
function displayBooks(arr) {
  const main = document.querySelector(".main");
  arr.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("my-books");
    main.appendChild(div);
  });
}

// Call Default Books
addBookToLibrary("Brave New World", "Aldous Huxley", "288", "Read");
addBookToLibrary("Neuromancer", "William Gibson", "271", "Read");
addBookToLibrary("1984", "George Orwell", "328", "Read");

displayBooks(myLibrary);
