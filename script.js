// The Array
const myLibrary = []; // book objects go here

// The Constructor
function Book(title, author, pageCount, image, description, completionStatus) {
  // the constructor...
  if (!new.target) {
    throw Error("You must use the 'new' keyword to create a new object.");
  }

  this.title = `"${title}"`;
  this.author = "By: " + author;
  this.pageCount = pageCount + " Pages";
  this.image = image;
  this.description = description;
  this.completionStatus = completionStatus;
  this.id = crypto.randomUUID();
}

// Create and Store Book
function addBookToLibrary(
  title,
  author,
  pageCount,
  image,
  description,
  completionStatus
) {
  // take params, create a book then store it in the array
  let newBook = new Book(
    title,
    author,
    pageCount,
    image,
    description,
    completionStatus
  );
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
      const descriptionLi = document.createElement("li");
      const completionStatus = document.createElement("li");

      // if/else statements:
      // - description only needs to be created if the user actually enters a description.
      // - completionStatus needs to be created regardless. If checkbox is not checked in the form, completionStatus will need to be set to "unread" rather than "undefined"

      // Assign Classes & Attributes
      div.classList.add("cards");
      textCards.classList.add("text-cards");

      if (book.image === "") {
        image.src = "./images/dystopian-library.jpg";
      } else {
        image.src = book.image;
      }

      // Add Content
      titleLi.innerText = book.title;
      authorLi.innerText = book.author;
      pageCountLi.innerText = book.pageCount;
      descriptionLi.innerText = book.description;
      completionStatus.innerText = book.completionStatus;

      // Append Children
      div.appendChild(textCards);
      div.appendChild(image);
      textCards.appendChild(ul);
      ul.appendChild(titleLi);
      ul.appendChild(authorLi);
      ul.appendChild(pageCountLi);
      ul.appendChild(descriptionLi);
      ul.appendChild(completionStatus);
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

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pageCount = document.getElementById("page-count").value;
  const image = document.getElementById("image-link").value;
  const description = document.getElementById("description").value;
  const completionStatus = document.getElementById("read-checkbox");

  addBookToLibrary(
    title,
    author,
    pageCount,
    image,
    description,
    completionStatus
  );

  dialog.close();
});

// Call Default Books
addBookToLibrary(
  "Brave New World",
  "Aldous Huxley",
  "288",
  "./images/brave-new-world-cover.jpg"
  // "A searching vision of an unequal, technologically-advanced future.",
  // "Read"
);
addBookToLibrary(
  "A Scanner Darkly",
  "Philip K. Dick",
  "304",
  "./images/a-scanner-darkly.jpg"
  // "Unread"
);
addBookToLibrary(
  "1984",
  "George Orwell",
  "328",
  "./images/1984-cover.png"
  // "Read"
);
addBookToLibrary(
  "Farenheit 451",
  "Ray Bradbury",
  "249",
  "./images/farenheit-451.webp"
  // "Read"
);
