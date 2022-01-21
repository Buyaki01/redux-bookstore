import Axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const getBook = (payload) => ({
  type: GET_BOOK,
  payload,
});

export const addBookToApi = (payload) => async (dispatch) => {
  const { id, title, category } = payload;
  const newBook = { item_id: id, title, category };
  await Axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VHpydtTmB2BGOWHO1HZg/books', newBook);
  dispatch(addBook(payload));
};

export const getBookFromApi = () => async (dispatch) => {
  const books = await Axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VHpydtTmB2BGOWHO1HZg/books');
  const mapBooks = Object.entries(books.data).map(([id, book]) => {
    const { category, title } = book[0];
    return { id, category, title };
  });
  dispatch(getBook(mapBooks));
};

export const removeBookFromApi = (id) => async (dispatch) => {
  await Axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VHpydtTmB2BGOWHO1HZg/books/${id}`);
  dispatch(removeBook(id));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case GET_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
