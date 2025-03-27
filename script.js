// The Array
const myLibrary = []; // book objects go here

// The Constructor
function Book(title, author, pageCount, image, completionStatus) {
  // the constructor...
  if (!new.target) {
    throw Error("You must use the 'new' keyword to create a new object.");
  }

  this.title = `${title}`;
  this.author = "By: " + author;
  this.pageCount = pageCount + " Pages";
  this.completionStatus = completionStatus;
  this.image = image;
  this.id = crypto.randomUUID();
}

// Create and Store Book
function addBookToLibrary(title, author, pageCount, image, completionStatus) {
  // take params, create a book then store it in the array
  let newBook = new Book(title, author, pageCount, image, completionStatus);
  myLibrary.push(newBook);
  displayBooks();
}

// Display Books - Loop Through Array
function displayBooks() {
  const main = document.querySelector(".main");

  myLibrary.forEach((book) => {
    const last = myLibrary[myLibrary.length - 1];
    if (book === last) {
      // Create elements
      const div = document.createElement("div");
      const textCards = document.createElement("div");
      const image = document.createElement("img");
      const ul = document.createElement("ul");
      const titleLi = document.createElement("li");
      const authorLi = document.createElement("li");
      const pageCountLi = document.createElement("li");

      // Assign Classes & Attributes
      div.classList.add("cards");
      textCards.classList.add("text-cards");
      image.src = book.image;

      // Add Content
      titleLi.innerText = book.title;
      authorLi.innerText = book.author;
      pageCountLi.innerText = book.pageCount;

      // Append Children
      div.appendChild(textCards);
      div.appendChild(image);
      textCards.appendChild(ul);
      ul.appendChild(titleLi);
      ul.appendChild(authorLi);
      ul.appendChild(pageCountLi);
      main.appendChild(div);
    }
  });
}

// Interact with Dialog
const addBookButton = document.querySelector(".add-book-button");
const submitButton = document.querySelector(".submit-button");
const cancelButton = document.querySelector(".cancel-button");

addBookButton.addEventListener("click", () => {
  dialog.showModal();
});

cancelButton.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const titleValue = document.getElementById("title").value;
  const authorValue = document.getElementById("author").value;
  const pageCountValue = document.getElementById("page-count").value;
  const imageValue = document.getElementById("image-link").value;
  const completionStatusValue = document.getElementById("read-checkbox");

  addBookToLibrary(
    titleValue,
    authorValue,
    pageCountValue,
    imageValue,
    completionStatusValue
  );

  dialog.close();
});

// Call Default Books
addBookToLibrary(
  "Brave New World",
  "Aldous Huxley",
  "288",
  "./images/brave-new-world-cover.jpg",
  "Read"
);
addBookToLibrary(
  "A Scanner Darkly",
  "Philip K. Dick",
  "304",
  "./images/a-scanner-darkly.jpg",
  "Unread"
);
addBookToLibrary(
  "1984",
  "George Orwell",
  "328",
  "./images/1984-cover.png",
  "Read"
);
addBookToLibrary(
  "Farenheit 451",
  "Ray Bradbury",
  "249",
  "./images/farenheit-451.webp",
  "Read"
);
