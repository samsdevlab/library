// The Array
const myLibrary = []; // book objects go here

// The Constructor
function Book(title, author, pageCount, completionStatus, image) {
  // the constructor...
  if (!new.target) {
    throw Error("You must use the 'new' keyword to create a new object.");
  }

  this.title = `"${title}"`;
  this.author = "By: " + author;
  this.pageCount = pageCount + " Pages";
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
function displayBooks(myLibraryArr) {
  const main = document.querySelector(".main")
  myLibraryArr.forEach(book => {
   
    // Create container divs
    const div = document.createElement("div");
    div.classList.add("cards");

    // Add image to divs    
    const image = document.createElement("img");
    image.src = book.image;
    div.appendChild(image);

    // Create Text Divs
    const textCards = document.createElement("div");
    textCards.classList.add("text-cards");

    // Content Lists
    const ul = document.createElement("ul");

    const titleLi = document.createElement("li");
    titleLi.innerText = book.title;

    const authorLi = document.createElement("li");
    authorLi.innerText = book.author;

    const pageCountLi = document.createElement("li");
    pageCountLi.innerText = book.pageCount;
  
    div.appendChild(textCards);
    textCards.appendChild(ul)
    ul.appendChild(titleLi);
    ul.appendChild(authorLi);
    ul.appendChild(pageCountLi);

    // Append Main
    main.appendChild(div);
  })
}

// Call Default Books
addBookToLibrary("Brave New World", "Aldous Huxley", "288", "Read", "./images/brave-new-world-cover.jpg");
addBookToLibrary("A Scanner Darkly", "Philip K. Dick", "304", "Unread", "./images/a-scanner-darkly.jpg");
addBookToLibrary("1984", "George Orwell", "328", "Read", "./images/1984-cover.png");

displayBooks(myLibrary);