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

Book.prototype.toggleReadStatus = function (completionStatusLi) {
  if (this.completionStatus === "Read") {
    this.completionStatus = "Unread";
  } else if (this.completionStatus === "Unread") {
    this.completionStatus = "Read";
  }

  if (completionStatusLi.textContent === "Read") {
    completionStatusLi.textContent = "Unread";
  } else if (completionStatusLi.textContent === "Unread") {
    completionStatusLi.textContent = "Read";
  }
};

// Display Books - Loop Through Array
function displayBooks() {
  const main = document.querySelector(".main");
  myLibrary.forEach((book) => {
    const last = myLibrary[myLibrary.length - 1];
    if (book === last) {
      // Create elements
      const cardDiv = document.createElement("div");
      const textCards = document.createElement("div");
      const image = document.createElement("img");
      const ul = document.createElement("ul");
      const titleLi = document.createElement("li");
      const authorLi = document.createElement("li");
      const pageCountLi = document.createElement("li");
      const completionStatusLi = document.createElement("li");
      const cardButtonDiv = document.createElement("div");
      const completionStatusButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      const trashcanImg = document.createElement("img");
      const eyeImg = document.createElement("img");
      const randomId = last.id;

      // Assign Classes & Attributes
      cardDiv.classList.add("cards");
      cardDiv.dataset.randomId = randomId;
      textCards.classList.add("text-cards");
      cardButtonDiv.classList.add("card-button-div");
      completionStatusButton.classList.add(
        "card-buttons",
        "completion-status-button"
      );
      deleteButton.classList.add("card-buttons", "delete-button");

      // Add Event Listeners
      deleteButton.addEventListener("click", () => {
        const cardDiv = deleteButton.closest(".cards");
        const bookId = cardDiv.dataset.randomId;

        const bookIndex = myLibrary.findIndex((book) => book.id === bookId);
        myLibrary.splice(bookIndex, 1);

        cardDiv.remove();
      });

      completionStatusButton.addEventListener("click", () => {
        book.toggleReadStatus(completionStatusLi);
      });

      // Exceptions
      if (last.image === "") {
        image.src = "./images/dystopian-library.jpg";
        image.alt = "Default image of futuristic, dystopian library";
      } else {
        image.src = book.image;
        image.alt = "Image of book's title cover";
      }

      if (last.completionStatus === "Read" || last.completionStatus.checked) {
        completionStatusLi.innerText = "Read";
      } else {
        completionStatusLi.innerText = "Unread";
      }

      // Add Content to Required Input Fields
      titleLi.innerText = book.title;
      authorLi.innerText = book.author;
      pageCountLi.innerText = book.pageCount;

      trashcanImg.src = "./images/trashcan.png";
      trashcanImg.alt = "Trashcan - this button deletes the card";
      eyeImg.src = "./images/eye.png";
      eyeImg.alt =
        "Eyeball image - this button toggles the book's status between 'Read' and 'Unread";

      // Append Children
      cardDiv.appendChild(cardButtonDiv);
      deleteButton.appendChild(trashcanImg);
      completionStatusButton.appendChild(eyeImg);
      cardButtonDiv.appendChild(completionStatusButton);
      cardButtonDiv.appendChild(deleteButton);
      cardDiv.appendChild(textCards);
      cardDiv.appendChild(image);
      textCards.appendChild(ul);
      ul.appendChild(titleLi);
      ul.appendChild(authorLi);
      ul.appendChild(pageCountLi);
      ul.appendChild(completionStatusLi);
      main.appendChild(cardDiv);
      if (last.description !== " " && last.description !== "") {
        const descriptionLi = document.createElement("li");
        descriptionLi.innerText = book.description;
        ul.appendChild(descriptionLi);
      }
    }
  });
}

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
  const readStatus = document.getElementById("read-checkbox");
  const completionStatus = readStatus.checked === true ? "Read" : "Unread";

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
  "Read"
);
addBookToLibrary(
  "A Scanner Darkly",
  "Philip K. Dick",
  "304",
  "./images/a-scanner-darkly.jpg",
  "An addict cop loses himself in a world of surveillance and deceit.",
  "Unread"
);
addBookToLibrary(
  "1984",
  "George Orwell",
  "328",
  "./images/1984-cover.png",
  "A man rebels against a totalitarian regime that watches his every move.",
  "Read"
);
addBookToLibrary(
  "Farenheit 451",
  "Ray Bradbury",
  "249",
  "./images/farenheit-451.webp",
  "In a future without books, a fireman questions his duty to burn them.",
  "Read"
);

// Checklist Before Publishing
// • Remove code that has been commented out
// • Add alt tags to images
// • Test on other browsers
// • Include font fallbacks
