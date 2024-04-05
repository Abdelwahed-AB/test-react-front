import "../assets/styles/pages/MainPage.css";
import BookComponent from "../components/book/BookComponent";
import useFetch from "../hooks/useFetch";
import Book from "../models/Book.model";

const MainPage = () => {
    const books: Book[] = useFetch("/books").data;

    return (
        <section className="main-page">
            <h3>Books</h3>
            <section className="book-list-container">
                {books && books.map((book) => <BookComponent book={book} />)}
            </section>
        </section>
    );
};

export default MainPage;
