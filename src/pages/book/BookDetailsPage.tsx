import { useParams } from "react-router-dom";
import "../../assets/styles/pages/BookDetailsPage.css";
import BookDetailsComponent from "../../components/book/BookDetailsComponent";
import Book from "../../models/Book.model";
import useFetch from "../../hooks/useFetch";

const BookDetailsPage = () => {
    const { id } = useParams();
    const book: Book = useFetch(`/books/${id}`).data;

    return (
        <section className="book-details-page">
            <h3>Book details</h3>
            {book && <BookDetailsComponent book={book} />}
        </section>
    );
};

export default BookDetailsPage;
