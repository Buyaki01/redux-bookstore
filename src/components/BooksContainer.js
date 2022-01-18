import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import BooksList from './BooksList';
import InputAddBook from './InputAddBook';
import Categories from '../redux/categories/Categories';

const BooksContainer = () => (
  <>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={(
          <div className="container">
            <div className="inner">
              <BooksList />
              <InputAddBook />
            </div>
          </div>
            )}
      />

      <Route path="/categories" element={<Categories />} />

    </Routes>
  </>
);
export default BooksContainer;
