import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/Books';

const InputAddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || author === '') return;
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <section className="newBookSec">
      <h2 className="newBookHeading">ADD NEW BOOK</h2>
      <form action="#" className="formSection">
        <label htmlFor="titel" className="bookTitle">
          <input
            className="inputSec"
            type="text"
            id="titel"
            placeholder="Book title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="inputAuthorSec"
            type="text"
            id="titel"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label htmlFor="book-category" className="bookCategorySec">
          <select name="book-category" id="category" className="inputBookCategory">
            <option value="Category" hidden>
              Category
            </option>
            <option value="Category">Action</option>
            <option value="Category">Adventure</option>
          </select>
        </label>
        <button onClick={submitBookToStore} type="submit" className="addBookBtn">
          <span> ADD BOOK </span>
        </button>
      </form>
    </section>
  );
};

export default InputAddBook;
