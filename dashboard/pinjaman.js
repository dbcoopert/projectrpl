

function updateBorrowStatus() {
    books.forEach(book => {
        const button = document.getElementById(`borrow-${book.id}`);
        button.textContent = book.borrowed ? "Kembalikan" : "Pinjam";
        button.style.backgroundColor = book.borrowed ? "red" : "green";
    });
}

function toggleBorrow(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        book.borrowed = !book.borrowed;
        alert(`${book.borrowed ? "Anda akan meminjam" : "Anda akan mengembalikan"} buku "${book.title}"`);
        updateBorrowStatus();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    books.forEach(book => {
        const button = document.createElement("button");
        button.id = `borrow-${book.id}`;
        button.textContent = "Pinjam";
        button.style.padding = "10px 20px";
        button.style.marginTop = "10px";
        button.style.color = "white";
        button.style.border = "none";
        button.style.borderRadius = "6px";
        button.style.cursor = "pointer";
        button.addEventListener("click", () => toggleBorrow(book.id));
        document.getElementById(book.id).appendChild(button);
    });
    updateBorrowStatus();
});

logout.addEventListener('click', () => {
    const isLog = confirm('Apakah anda yakin ingin Logout?')
    isLog ? window.location.href = '../index.html' : false
})


