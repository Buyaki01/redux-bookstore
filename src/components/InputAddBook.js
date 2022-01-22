import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookToApi } from '../redux/books/Books';

const InputAddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || category === '') return;
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };

    dispatch(addBookToApi(newBook));
    setTitle('');
    setCategory('');
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
        </label>
        <label htmlFor="book-category" className="bookCategorySec">
          <select name="book-category" id="category" className="inputBookCategory" value={category} onChange={(e) => setCategory(e.target.value)}>

            <option value="Category" hidden>
              Category
            </option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Science">Science</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Religion">Religion</option>
          </select>
        </label>
        <button onClick={submitBookToStore} type="submit" className="addBookBtn">
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default InputAddBook;
