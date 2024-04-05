import { useContext } from "react";
import "../../assets/styles/pages/MyBooksPage.css";
import BookComponent from "../../components/book/BookComponent";
import useFetch from "../../hooks/useFetch";
import Book from "../../models/Book.model";
import { LoggedInUserContext } from "../../App";

const UserReadBooksPage = () => {
    const { userId } = useContext(LoggedInUserContext);
    const params = { userId };

    const books: Book[] = useFetch("/read", { params }).data;

    return (
        <section className="my-books-page">
            <h3>My books</h3>
            <section className="book-list-container">
                {books && books.map((book) => <BookComponent book={book} />)}
            </section>
        </section>
    );
};
export default UserReadBooksPage;
