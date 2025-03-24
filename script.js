// The Array
const myLibrary = []; // book objects go here

// The Constructor
function Book(title, author, pageCount, completionStatus, image) {
  // the constructor...
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
  // take params, create a book then store it in the array
  let newBook = new Book(title, author, pageCount, completionStatus, image);
  myLibrary.push(newBook);
}

// Display Books - Loop Through Array
const displayBooks = function displayBooks(myLibraryArr) {
  const main = document.querySelector(".main");
  myLibraryArr.forEach((book) => {

    const div = document.createElement("div");
    div.classList.add("my-books");
    
    const image = document.createElement("img");
    bookImage = book.image;
    image.src = bookImage;
    div.appendChild(image)

    main.appendChild(div);
  });

  // Add hover effect to div with an overlaid "holographic" background
  // Add book info on top of holographic background
}

// Call Default Books
addBookToLibrary("Brave New World", "Aldous Huxley", "288", "Read", "./images/brave-new-world-cover.jpg");
addBookToLibrary("A Scanner Darkly", "Philip K. Dick", "304", "Unread", "./images/a-scanner-darkly.jpg");
addBookToLibrary("1984", "George Orwell", "328", "Read", "./images/1984-cover.png");

displayBooks(myLibrary);

// console.log(myLibrary)