import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BooksContainer from './components/BooksContainer';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BooksContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
