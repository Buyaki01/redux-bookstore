import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BooksList = () => {
  const booksArray = useSelector((state) => state.booksReducer);
  return (
    <section>
      {booksArray.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </section>
  );
};

export default BooksList;
