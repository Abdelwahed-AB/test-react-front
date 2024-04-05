import "../../assets/styles/components/BookComponent.css";
import Book from "../../models/Book.model";
import { handleCardDescription } from "../../utils/textUtils";
import { useNavigate } from "react-router-dom";

type BookComponentProps = { book: Book };

const BookComponent = (props: BookComponentProps) => {
    const book = props.book;
    const navigate = useNavigate();

    function handleDetailsClick() {
        navigate(`/book/${book.id}/details`);
    }
    return (
        <article className="book-card">
            <img className="book-card-img" src={book.thumbnailImage} />
            <section className="book-card-content">
                <h4>{book.title}</h4>
                <p>{handleCardDescription(book.description)}</p>
            </section>
            <section className="book-card-actions">
                <button
                    onClick={handleDetailsClick}
                    className="btn details-btn"
                >
                    Details
                </button>
            </section>
        </article>
    );
};

export default BookComponent;
