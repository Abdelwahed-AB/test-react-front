import { useContext } from "react";
import "../../assets/styles/components/BookDetailsComponent.css";
import Book from "../../models/Book.model";
import { LoggedInUserContext } from "../../App";
import { readBook } from "../../services/readService";
import { useNavigate } from "react-router-dom";

type BookDetailsProps = { book: Book };

const BookDetailsComponent = (props: BookDetailsProps) => {
    const book = props.book;
    const { userId } = useContext(LoggedInUserContext);
    const navigate = useNavigate();

    function handleMarkBookAsRead() {
        readBook(userId, book.id).then(() => {
            navigate("/");
        });
    }

    return (
        <article className="book-details">
            <img className="book-details-img" src={book.thumbnailImage} />
            <section className="book-details-content">
                <h2 className="book-details-title">{book.title}</h2>
                <p>{book.description}</p>
            </section>
            {userId > 0 && (
                <section className="book-details-actions">
                    <button
                        className="btn btn-read"
                        onClick={handleMarkBookAsRead}
                    >
                        Read
                    </button>
                    <button className="btn btn-wishlist">Wishlist</button>
                </section>
            )}
        </article>
    );
};

export default BookDetailsComponent;
