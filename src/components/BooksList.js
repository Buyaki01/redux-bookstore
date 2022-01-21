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
      {booksArray.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </section>
  );
};

export default BooksList;
