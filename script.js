// The Array
const myLibrary = []; // book objects go here

// The Constructor
function Book(title, author, pageCount, image, description, completionStatus) {
  // the constructor...
  if (!new.target) {
    throw Error("You must use the 'new' keyword to create a new object.");
  }

  this.title = `"${title}"`;
  this.author = "By " + author;
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
      const completionStatusLi = document.createElement("li");
      const cardButtonDiv = document.createElement("div");
      const deleteButton = document.createElement("button");
      const completionStatusButton = document.createElement("button");
      const trashcanImg = document.createElement("img");
      const eyeImg = document.createElement("img");

      // Assign Classes & Attributes
      div.classList.add("cards");
      textCards.classList.add("text-cards");
      cardButtonDiv.classList.add("card-button-div");
      deleteButton.classList.add("card-buttons", "delete-button");
      completionStatusButton.classList.add(
        "card-buttons",
        "completion-status-button"
      );

      // Exceptions
      if (last.image === "") {
        image.src = "./images/dystopian-library.jpg";
      } else {
        image.src = book.image;
      }

      if (
        last.completionStatus === "Checked" ||
        last.completionStatus.checked
      ) {
        completionStatusLi.innerText = "Read";
      } else {
        completionStatusLi.innerText = "Unread";
      }

      // Add Content to Required Input Fields
      titleLi.innerText = book.title;
      authorLi.innerText = book.author;
      pageCountLi.innerText = book.pageCount;
      trashcanImg.src = "./images/trashcan.png";
      eyeImg.src = "./images/eye.png";

      // Start here on Monday 04/01 - figure out how to place these SVGs in the buttons, then program the buttons to both delete the entire container and toggle read/unread.

      // Append Children
      div.appendChild(cardButtonDiv);
      deleteButton.appendChild(trashcanImg);
      completionStatusButton.appendChild(eyeImg);
      cardButtonDiv.appendChild(deleteButton);
      cardButtonDiv.appendChild(completionStatusButton);
      div.appendChild(textCards);
      div.appendChild(image);
      textCards.appendChild(ul);
      ul.appendChild(titleLi);
      ul.appendChild(authorLi);
      ul.appendChild(pageCountLi);

      ul.appendChild(completionStatusLi);
      main.appendChild(div);
      if (last.description !== " " && last.description !== "") {
        const descriptionLi = document.createElement("li");
        descriptionLi.innerText = book.description;
        ul.appendChild(descriptionLi);
      }
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
  "./images/brave-new-world-cover.jpg",
  "In a hedonistic utopia, control and conditioning erase free will.",
  "Checked"
);
addBookToLibrary(
  "A Scanner Darkly",
  "Philip K. Dick",
  "304",
  "./images/a-scanner-darkly.jpg",
  "An addict cop loses himself in a world of surveillance and deceit.",
  "Checked"
);
addBookToLibrary(
  "1984",
  "George Orwell",
  "328",
  "./images/1984-cover.png",
  "A man rebels against a totalitarian regime that watches his every move.",
  "Checked"
);
addBookToLibrary(
  "Farenheit 451",
  "Ray Bradbury",
  "249",
  "./images/farenheit-451.webp",
  "In a future without books, a fireman questions his duty to burn them.",
  "Checked"
);
