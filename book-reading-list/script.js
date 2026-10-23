
const bookForm = document.getElementById("bookForm");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookList = document.getElementById("bookList");

bookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = bookTitle.value.trim();
    const author = bookAuthor.value.trim();

    if (title === "" || author === "") {
        return;
    }

    const li = document.createElement("li");
    const bookInfo = document.createElement("span");
    const deleteButton = document.createElement("button");

    bookInfo.textContent = title + " by " + author;
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(bookInfo);
    li.appendChild(deleteButton);
    bookList.appendChild(li);

    bookForm.reset();
});
