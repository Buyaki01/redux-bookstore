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
          <select name="book-category" id="category" className="inputBookCategory" onChange={(e) => setCategory(e.target.value)}>

            <option value="Category" hidden>
              Category
            </option>
            <option value="Category">Action</option>
            <option value="Category">Adventure</option>
            <option value="science">Science</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
            <option value="thriller">Religion</option>
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
