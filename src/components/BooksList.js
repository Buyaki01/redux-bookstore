import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { getBookFromApi } from '../redux/books/Books';

const BooksList = () => {
  const booksArray = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookFromApi());
  }, [dispatch]);
  return (
    <section>
      {booksArray.length ? (
        booksArray.map((book) => (
          <BookItem book={book} key={book.id} />
        ))
      ) : (
        <h3 className="emptyInput">There is no books!</h3>
      )}
    </section>

  );
};

export default BooksList;
