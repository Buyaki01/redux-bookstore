import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { removeBookFromApi } from '../redux/books/Books';

const BookItem = (props) => {
  const { book: { id, title, category } } = props;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBookFromApi(id));
  };
  const percentage = 65;
  return (
    <div className="bookItemContainer">
      <div className="booksSection">
        <div>
          <h3 className="bookItemCategory">
            {category}
          </h3>
        </div>
        <h2 className="bookItemTitle">
          {title}
        </h2>
        <div className="userBtn">
          <button type="button" className="commentsBtn">Comments</button>
          <button type="button" className="removeBtn" onClick={removeBookFromStore}>Remove</button>
          <button type="button" className="editBtn">Edit</button>
        </div>
      </div>

      <div className="progressContainer">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({ pathColor: '#0EA5E9', marginRight: '10px' })}
          className="progressBar"
        />
        <div className="progressPercentageSection">
          <p className="progressPercentage">
            {percentage}
            %
          </p>
          <p className="progressCompleted">Completed</p>
        </div>
      </div>

      <div>
        <h4 className="currentChapter">CURRENT CHAPTER</h4>
        <h5 className="chapter">
          Chapter
          { `${Math.floor(Math.random() * 50)}`}
        </h5>
        <button type="button" className="updateProgressBtn">
          UPDATE PROGRESS
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
