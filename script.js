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
