const myLibrary = []; // book objects go here

function Book(title, author, pageCount, completionStatus) {
  // the constructor
  if (!new.target) {
    throw Error("You must use the 'new' keyword to create a new object.");
  }

  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.completionStatus = completionStatus;
}

function addBookToLibrary(author) {
  // take params, create a book then store it in the array
  // all book objects should have unique id utilizing crypto.randomUUID()
}
