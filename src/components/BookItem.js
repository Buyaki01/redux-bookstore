import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/books/Books';

const BookItem = (props) => {
  const { book: { id, title, category } } = props;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBookFromApi(id));
  };

  return (
    <div className="bookItemContainer">
      <div className="booksSection">
        <div>
          <h3 className="bookItemCategory">
            {category}
          </h3>
        </div>
        <h2>
          {title}
        </h2>
        <div className="userBtn">
          <button type="button" className="commentsBtn">Comments</button>
          <button type="button" className="removeBtn" onClick={removeBookFromStore}>Remove</button>
          <button type="button" className="editBtn">Edit</button>
        </div>
      </div>

      <div className="progressContainer">
        <p> 64% </p>
        <h6>Completed</h6>
      </div>

      <div>
        <h4 className="currentChapter">CURRENT CHAPTER</h4>
        <h5 className="chapter">Chapter 17</h5>
        <button type="button" className="updateProgressBtn">
          <span> UPDATE PROGRESS </span>
        </button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default BookItem;
